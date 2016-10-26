$(document).ready(function(){

  var my_API_key = 'apikey=xxxxxxxxxxx';
  console.log("js loaded!");
  $('#compare').hide();
  $('#keyword').hide();

//event listeners for controller buttons
  $('#compare_link').on('click',function(e){
    e.preventDefault();
    $('.landing_message').hide();
    $('#compare_form')[0].reset();
    $('#keyword').hide();
    $('#compare').show();
 });

  $('#by_key_link').on('click',function(e){
    e.preventDefault();
    $('.landing_message').hide();
    $('#keyword_form')[0].reset();
    $('#compare').hide();
    $('#keyword').show();
 });

//event listeners for form submissions
  $('#compare_form').on('submit',function(e){
    e.preventDefault();
    // if both CUI's are entered
    if(($('#cui_one').val() != "") &&  ( $('#cui_two').val() !="" )){
      var custom_URL_List = [];
      var results=[];

      custom_URL_List.push('https://api.lexigram.io/concepts/'+ $('#cui_one').val() +'?'+my_API_key);
      custom_URL_List.push('https://api.lexigram.io/concepts/'+ $('#cui_two').val() +'?'+ my_API_key);

      //making ajax calls and waiting until both concepts are returned before rendering the template for the view
      $.when(getConceptById(custom_URL_List[0]), getConceptById(custom_URL_List[1])).done(function(con1, con2){
        results.push(con1[0]);
        results.push(con2[0]);
        render(results);
      });
    } else{
      alert("Please enter both CUIs before submitting");
    }

  //function to make ajax call
  function getConceptById(customURL) {
    return $.ajax({
                 method:"GET",
                 url:customURL,
                 data:[]
            });
  }

 });

  $('#keyword_form').on('submit',function(e){
   e.preventDefault();
   var key = $('#keywords').val();
   var search_keys = "";
   //prevents furthur action if keyword is not provided
   if(key.length < 1){
    return alert('Please enter a valid keyword.')
   }else{
      search_keys += 'q=' +key+'&';
   }
   //default value is set at 0.3 if user doesnt provide any other value
   var threshold = $('#threshold').val() || 0.3;
   var list = $('.checkboxes').find('.box');

   //generating the 'key=value' pairs based on the selected checkboxes
   $.each(list,function(index){
    if(list[index].checked){
      search_keys += 'show_type=' + list[index].id +'&';
    }
   });

   search_keys += 't=' + threshold+'&'+my_API_key;
   console.log(search_keys);

   $.ajax({
    method:'GET',
    url:'https://api.lexigram.io/search?'+search_keys,
    data:[],
    success:function(data){
      render(data);
    }
   });
 });

 //render received data on the view
  function render(data){
    var scripts = $('#result_template');
    $('#result_table').html('').append(scripts);
    //generating html string using results and handlebars
    var source = $('#result_template').html();
    var template = Handlebars.compile(source);
    var generatedHTML = template({concept : data});
    $('#result_table').append(generatedHTML);
  }
});
