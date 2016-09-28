/*
http://www.etnassoft.com/2011/03/14/funciones-autoejecutables-en-javascript/
*/
//(function(name){
//     console.log("Your Name is: " + name);
//})('Manu');



/*
http://html5facil.com/tutoriales/como-crear-plugins-para-jquery/
 */
(function($){
     $.fn.extend({
      showMessage: function(msg){
        return this.each(function(){
          $(this).click(function(){
            console.log(msg);
          })
        })
      },
      showMyId: function(){
        return this.each(function(){
          $(this).click(function(){
            console.log("My ID is " + $(this).attr('id'));
          })
        })
      },
      showMyName: function(){
        return this.each(function(){
          $(this).click(function(){
            console.log("My name is " + $(this).attr('name'));
          })
        })
      }
     })
})(jQuery);


$(document).ready(function(){
  $('input').showMyId();

  //$('.myInputClass').showMyName();
})

/*
A lo que quiero llegar:


$('#eventForm').formValidation({
    fields: {
        startDate: {
            validators: {
                date: {
                    message: 'The start date is not valid',
                    format: 'YYYY-MM-DD',
                    max: 'endDate'
                }
            }
        },
        endDate: {
            validators: {
                date: {
                    message: 'The end date is not valid',
                    format: 'YYYY-MM-DD',
                    min: 'startDate'
                }
            }
        }
    }
});
 */