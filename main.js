// API at http://dev.markitondemand.com/#stockquote
 
$(".search").submit(function(evt) {
  evt.preventDefault()
    var inputText = $('.search > #st-search-input').val()    
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='
    var urlFinal = url + inputText

    $.ajax({
           dataType:'jsonp',
           url: urlFinal,
           success:function(data)
           {
   
     $('.heading').html(data.Name);
      $('.LastPrice').html(data.LastPrice);
      $('.Change').html(data.Change.toFixed(2));
      $('.ChangePercentage').html( "("+ data.ChangePercent.toFixed(2) + "%" +")");
      $('.time').html(data.Timestamp);
      $('.Low').html((data.Low) + " - ");
      $('.High').html(data.High);
      $('.Open').html(data.Open);
      $('.Volume').html(numberShorten(data.Volume));
      $('.MarketCap').html(numberShorten(data.MarketCap));
        $('.Timestamp').html(formatDate(data.Timestamp));
             
              
      }
    });
  
  })
 
function formatDate(value) {
  var myDate= new Date(value);
  
  var result = "as of " + 
  myDate.getHours().toString() +
  ":" + 
  formatTime(myDate.getMinutes().toString()) +
  ":" + 
  formatTime(myDate.getSeconds().toString()) +
  ((myDate.getHours() >= 12) ? " PM" : " AM");
  return result;

}
function formatTime(value) {
  return (value < 9)  ? "0" + value :  value;
}

function numberShorten(value) {
   if (Math.abs(Number(value)) >= 1.0e+9) {
       return (Math.abs(Number(value)) / 1.0e+9).toFixed(1) + "B";
   }
   if (Math.abs(Number(value)) >= 1.0e+6) {
       return (Math.abs(Number(value)) / 1.0e+6).toFixed(1) + "M";
   }
   if (Math.abs(Number(value)) >= 1.0e+3) {
       return (Math.abs(Number(value)) / 1.0e+3).toFixed(1) + "K";
   }
   return 0;
};


