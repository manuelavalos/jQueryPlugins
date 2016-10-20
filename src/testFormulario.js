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

/*
Forms tienen elementos
    Los elementos que nos interean son:
    input: type=['button','checkbox','color','date','datetime','datetime-local','email','file','hidden','image','month','number','password','radio','range','reset','search','submit','tel','text','time','url','week']
    select
    option
    button
        Cada elemento tiene sus propios eventos

        Cada elemento tiene sus características:
            email
            checkbox
            hidden
            image
            password
            text

        Cada elemento tiene sus propias validaciones

        Cada elemento tiene sus propios mensajes (exito y error)

        Los elementos que nos interesan son los que se envían a través del formulario.


Eventos:
    Cuando carga el DOM
    Cuando se pasa el mouse por encima
    Cuando se quita el mouse por encima
    Cuando hacemos click con el mouse
    Cuando tipeamos dentro del mouse
    Cuando seleccionamos una opción
    Cuando se envia el formulario

Logic with "data-attributes":
    [data]-[pluginName]-[central-action]-[attributes] = (values)
    data-form-watch = true

    data-form-mask-email = true
    data-form-mask-money = true
    data-form-mask-date = true
    data-form-mask-cnpj = true
    data-form-mask-cep = true
    data-form-mask-custom = "000-000-000/00" || "000.000.000.000" || etc

    data-form-validate-notEmpty = true
    data-form-validate-onlyLetters = true
    data-form-validate-email = true
    data-form-validate-onlyNumbers = true
    data-form-validate-maxLength = 50

    data-form-required = true
    data-form-readonly = true
    data-form-disabled = true


*/

$(document).ready(function(){
  $('#myForm').formManager(var formOject = {
        'fields' : [{
            'id' : 'myName',
            'name' : 'myName',
            'validate': {
                'notEmpty' : true,
                'onlyLetters' : true,
                'maxLength' : 50,
            },
            attributes:{
                'required' : true,
                'readonly' : false,
                'disabled' : false,
            },
            messages:{
                success: {
                    '.alert-success' : 'Bla bla bla!',
                },
                errrors: {
                    '.alert-error-empty' : 'Bla bla bla',
                    '.alert-error-invalid' : 'Bla bla bla',
                }
            }
        },
        {
            'id' : 'myEmail',
            'name' : 'myEmail',
            'validate': {
                'notEmpty' : true,
                'email' : true,
                'maxLength' : 40,
            },
            attributes:{
                'required' : true,
                'readonly' : false,
                'disabled' : false,
                'maxLength' : 40
            },
            messages:{
                success: {
                    '.alert-success' : 'Bla bla bla!',
                },
                errrors: {
                    '.alert-error-empty' : 'Bla bla bla',
                    '.alert-error-invalid' : 'Bla bla bla',
                }
            },
            'mask': {
                'maskEmail': true
            }
        },
        {
            'id' : 'myBudget',
            'name' : 'myBudget',
            'validate': {
                'notEmpty' : true,
                'onlyNumbers' : true,
                'maxLength' : 9,
            },
            attributes:{
                'required' : true,
                'readonly' : false,
                'disabled' : false,
                'maxLength' : 9
            },
            messages:{
                success: {
                    '.alert-success' : 'Bla bla bla!',
                },
                errrors: {
                    '.alert-error-empty' : 'Bla bla bla',
                    '.alert-error-invalid' : 'Bla bla bla',
                }
            },
            'mask': {
                'maskMoney': true
            }
        }],
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