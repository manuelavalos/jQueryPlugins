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
      formManager: function(formObject){
        console.log(formObject)
        console.log('-------------------------------------------');
        this.find('input').each(function(index, object){
            if (formObject.fields[object.name] != undefined) {
                console.log(object.name + ":");
                console.log("|___validations: ", formObject.fields[object.name].validations)
                console.log("|___Mask: ", formObject.fields[object.name].mask)
            };
        });
      }
     })
})(jQuery);


$(document).ready(function(){
  $('#myForm').formManager({
    fields: {
        phone: {
            validations: {
                notEmpty: true,
                maxLength: 10,
            },
            mask: {
                phone: true
            }
        },
        email: {
            validations: {
                notEmpty: true,
                maxLength: 10,
                validEmail: true
            }
        },
        password: {
            validations: {
                notEmpty: true,
                maxLength: 10,
                hasLowerChar: true,
                hasUpperChar: true,
                hasNumber: true,
                hasSpecialChars: true
            }
        },
        checkbox: '',
        mySubmit: ''
    }
  });

  //$('.myInputClass').showMyName();
})

/*
A lo que quiero llegar:


$('#eventForm').formValidation({
    fields: {
        startDate: {
            mask: {
              
            }
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