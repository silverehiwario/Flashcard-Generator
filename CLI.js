
'use strict';


var inquirer = require('inquirer');
var nodeArgs = process.argv;
var fs = require('fs');
var Card = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var e;
var ClozeCardArray = [];
var Answers = [];



 console.log("Sign Up Please");

var Questions = [
{
	type:'input',
	name:'first_name',
	message:'What is your first name'
},
{
    type:'input',
	name:'last_name',
	message:'What is your last name'

},
{
    type:'input',
	name:'email address',
	message:'What is your email address'
},
{
    type:'list',
	name:'Login_type',
	message:'User or Admin',
	choices: [
	'User',
	'Admin'
    ]
    
   }

   ];

   
  
   inquirer.prompt(Questions).then(function(answers){
 	
   fs.appendFile("log.txt",JSON.stringify(answers,null,''));
      Answers.push(answers);
    if(answers.Login_type == "User"){
     	quest();
     	      }
     	      else{
					const inquirer = require('inquirer');


					const requireLetterAndNumber = value => {
					  if (/\w/.test(value) && /\d/.test(value)) {
					    return true;
					  }
					  return 'Password need to have at least a letter and a number';
					};
					  inquirer.prompt(
					  {
					    type: 'password',
					    message: 'Enter a masked password',
					    name: 'password2',
					    mask: '*',
					    validate: requireLetterAndNumber
					  }
					).then(function(answers){
					   fs.readFile("log.txt", "utf8", function(error, data) {

					     if (error) {
					        return console.log(error);
					      }

					        else{
					            console.log(JSON.stringify(data, null, 2));


					                    }   
					                 
                                });
					});

				}


   });

     

     function RunCloze(){

 

        function AddClozeCard(text,cloze){    
           e = new ClozeCard(text,cloze); // here we create instance
           e.partial()
           ClozeCardArray.push(e);


         }

        AddClozeCard("computer programming is also known as programming or coding.", "computer programming");
        AddClozeCard("programming contains a set of instructions for the computer to perform different task.", "programming");
        AddClozeCard("debugging is the process of finding and removing errors in a program.", "debugging");
        AddClozeCard("A syntax error occurs when the program violates one or more grammatical rules of the programming language.", "syntax error");
        AddClozeCard("A runtime error occurs when the computer is directed to perform an illegal operation by the program such as dividing a number by zero.", "runtime error");
        AddClozeCard("An algorithm is a finite set of steps which, if followed, accomplish a particular task, it must be clear, finite and effective.", "algorithm");
        AddClozeCard("variables are named memory locations (memory cells) which are used to store program’s input and its computational results during program execution.", "variables");
        AddClozeCard("The loop is a structure which can repeat a set of statements up to a fixed number of times or until a certain criterion is satisfied.", "loop");
        AddClozeCard("Loop within a loop is called nested loop.", "nested loop");
        AddClozeCard("A constant is a quantity whose value cannot be changed", "constant");
      
      


        var lookup2 = [
                             
                {
                  
                type:'input',
                name:'comments[0]',
                //default:'Wrong Answer',
                message:ClozeCardArray[0].partial(),
                filter: function (answers) {
                return answers.toLowerCase();
                }

                },
                                              
                {
                  type:'input',
                name:'comments[1]',
                message:ClozeCardArray[1].partial(),
                filter: function (answers) {
                return answers.toLowerCase();
                }
                },

                  {
                  type:'input',
                name:'comments[2]',
                //default:'Wrong Answer',
                message:ClozeCardArray[2].partial(),
                filter: function (answers) {
                 return answers.toLowerCase();
                 }
                    
                },  
                                     
                                     
                {
                    type: 'input',
                    name: 'comments[3]',
                    //default:'Wrong Answer',
                    message:ClozeCardArray[3].partial(),
                    filter: function (answers) {
                    return answers.toLowerCase();
                     }
                              
                },
                                    
                {
                    type: 'input',
                    name: 'comments[4]',
                    //default:'Wrong Answer',
                    message:ClozeCardArray[4].partial(),
                    filter: function (answers) {
                    return answers.toLowerCase();
                     }
                            
                  },
                  {
                    type: 'input',
                    name: 'comments[5]',
                    //default:'Wrong Answer',
                    message:ClozeCardArray[5].partial(),
                    filter: function (answers) {
                    return answers.toLowerCase();
                     }
                            
                  },
                  {
                    type: 'input',
                    name: 'comments[6]',
                    //default:'Wrong Answer',
                    message:ClozeCardArray[6].partial(),
                    filter: function (answers) {
                    return answers.toLowerCase();
                     }
                            
                  },
                  {
                    type: 'input',
                    name: 'comments[7]',
                    //default:'Wrong Answer',
                    message:ClozeCardArray[7].partial(),
                    filter: function (answers) {
                    return answers.toLowerCase();
                     }
                            
                  },
                  {
                    type: 'input',
                    name: 'comments[8]',
                    //default:'Wrong Answer',
                    message:ClozeCardArray[8].partial(),
                    filter: function (answers) {
                    return answers.toLowerCase();
                     }
                            
                  },
                  {
                    type: 'input',
                    name: 'comments[9]',
                    //default:'Wrong Answer',
                    message:ClozeCardArray[9].partial(),
                    filter: function (answers) {
                    return answers.toLowerCase();
                     }
                            
                  }
                    
                ];
                   

                   inquirer.prompt(lookup2).then(function(answers){
                                var CorrectAnswer=[];
                                var WrongAnswer=[];
                               
                   for(var i =0; i< ClozeCardArray.length; i++) {//& for(var j=0; j< answers.length; i++) {
                                   var total = [];
                                   total.push(answers.comments[i]);
                                    Answers.push(answers.comments[i]);

                  //console.log(answers.comments[i]);
                  //console.log(CardArray[i].back);
                               if(answers.comments[i] === ClozeCardArray[i].cloze){
                                var u = console.log('Correct Answer');
                                        
                                  CorrectAnswer.push(u);
                               } else {
                                      var f = console.log('Wrong Answer: The Correct Answer is:' + ClozeCardArray[i].cloze);
                                      
                                      WrongAnswer.push(f);
                                        
                                    
                               }
                               }
                              
                               

                        console.log('Welldone');
                       fs.appendFile("log.txt",JSON.stringify(answers,null,''));



                }); 
              
       


}

      

       function quest(){

       	var CardArray = [];
 

       	function addCard(front,back){    
          var p = new Card(front,back); // here we create instance
          CardArray.push(p);
         }

        addCard("What does CSS stand for?", "cascading style sheets");
        addCard("What does HTML stand for?", "hypertext markup language");
        addCard("What is a free collection of tools for creating a websites and web applications?", "bootstrap");
        addCard("What is an object-oriented computer programming language commonly used to create interactive effects within web browsers?", "javascript");
        addCard("What is a fast, small, and feature-rich JavaScript library?", "jquery");
        addCard("What is a set of routines, protocols, and tools for building software applications.?", "api");
        addCard("What is a client-side script that communicates to and from a server/database without the need for a postback or a complete page refresh?", "ajax");
        addCard("What is used for Authentication, Cloud Storage and the Realtime Database?", "firebase");
        addCard("What is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications?", "node.js");
        addCard("What does OOP stand for?", "object-oriented programming");


  	  
  	  inquirer.prompt( 
  	  {
  	  	type: 'list',
        name:'option',
      message:'Easy or Advanced .',
      choices: [
      'BasicCard (Easy)',
      'ClozeCard  (Advanced)']

     }).then(function (answers) {
			 fs.appendFile("log.txt",JSON.stringify(answers,null,''));
				

     // inquirer.prompt(main).then(function(answers){
      //fs.appendFile("log.txt",JSON.stringify(answers,null,''));
       //for(var i=0; i< CardArray.length; i++){

             if(answers.option === 'BasicCard (Easy)'){

                   var lookup = [
                             
                                {
									
								type:'input',
								name:'comments[0]',
								//default:'Wrong Answer',
								message:CardArray[0].front,
								filter: function (answers) {
                                return answers.toLowerCase();
                                }
							
								},
			                                        
			                    {
							    type:'input',
								name:'comments[1]',

								message:CardArray[1].front,
								filter: function (answers) {
                                return answers.toLowerCase();
                                } 
								},

							    {
							    type:'input',
								name:'comments[2]',
								//default:'Wrong Answer',
								message:CardArray[2].front,
								filter: function (answers) {
                                return answers.toLowerCase();
                                }
										
								},  
                                     
                                     
					            {
							      type: 'input',
							      name: 'comments[3]',
							      //default:'Wrong Answer',
							      message:CardArray[3].front ,
							      filter: function (answers) {
                                  return answers.toLowerCase();
                                  }
															
								},
                                    
								{
							      type: 'input',
							      name: 'comments[4]',
							      //default:'Wrong Answer',
							      message:CardArray[4].front,
							      filter: function (answers) {
                                  return answers.toLowerCase();
                                  }
														
							    },
							    {
							      type: 'input',
							      name: 'comments[5]',
							      //default:'Wrong Answer',
							      message:CardArray[5].front,
							      filter: function (answers) {
                                  return answers.toLowerCase();
                                  }
														
							    },
							    {
							      type: 'input',
							      name: 'comments[6]',
							      //default:'Wrong Answer',
							      message:CardArray[6].front,
							      filter: function (answers) {
                                  return answers.toLowerCase();
                                  }
														
							    },
							    {
							      type: 'input',
							      name: 'comments[7]',
							      //default:'Wrong Answer',
							      message:CardArray[7].front,
							      filter: function (answers) {
                                  return answers.toLowerCase();
                                  }
														
							    },
							    {
							      type: 'input',
							      name: 'comments[8]',
							      //default:'Wrong Answer',
							      message:CardArray[8].front,
							      filter: function (answers) {
                                  return answers.toLowerCase();
                                  }
														
							    },
							    {
							      type: 'input',
							      name: 'comments[9]',
							      //default:'Wrong Answer',
							      message:CardArray[9].front,
							      filter: function (answers) {
                                  return answers.toLowerCase();
                                  }
														
							    }
								    
						    ];
						       

						       inquirer.prompt(lookup).then(function(answers){
                                var CorrectAnswer=[];
                                var WrongAnswer=[];

						       for(var i =0; i< CardArray.length; i++) {//& for(var j=0; j< answers.length; i++) {
                                   var total2 = [];
                                   total2.push(answers.comments[i]);
                                   Answers.push(total2);
						    
                               if(answers.comments[i] === CardArray[i].back){
                               	var u = console.log('Correct Answer');
                               	  CorrectAnswer.push(u);
                               } else {
                               	      var f = console.log('Wrong Answer: The Correct Answer is'+ CardArray[i].back);
                               	      
                               	      //action(i)+ "\n";
                               	      WrongAnswer.push(f);
                                        
                               
                               }
                               }
                                var sub = {
													  	  	type: 'confirm',
													        name:'advanced',
													        message:'Done with the easy level, would you like to go advanced?'
													        
													         }

													         inquirer.prompt(sub).then(function (answers) {

                                                                if(answers.advanced === true){
                                                                	RunCloze();
                                                                } else {
                                                                	console.log("Done");
                                                                }

																// fs.appendFile("log.txt",JSON.stringify(answers,null,'')); 
																});


                              fs.appendFile("log.txt",JSON.stringify(answers,null,''));
                               });
				               
				                   



       }  else {
       	          RunCloze();

                }

       
});


}
  

