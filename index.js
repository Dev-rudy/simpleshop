const popUp=document.querySelector(".pop-up-one-exit");
     popUp.addEventListener("click",popUps);
	 function popUps(){
		       document.querySelector(".pop-up-sale").style.display="none";
			   document.querySelector(".recent-next-page").style.display="block"
			   document.getElementById("offers").style.display="inline"
			   document.querySelector(".main-page").style.display="block"
			   document.querySelector(".recruitday").style.display="none"
			   }
			   
const offers=document.getElementById("offers");
offers.addEventListener("click",oferz);
function oferz(){document.querySelector(".pop-up-sale").style.display="block";
                  document.getElementById("offers").style.display="none";
				  document.querySelector(".recent-next-page").style.display="none"
				  document.querySelector(".main-page").style.display="none"
				 document.querySelector(".left-page").style.display="none"
				 document.querySelector(".right-page").style.display="none"
				 document.querySelector(".about").style.display="none"
                  document.querySelector(".freebies").style.display="none"
				  document.querySelector(".partners").style.display="none"
				  document.querySelector(".recruitday").style.display="none"
				  document.querySelector(".more").style.display="none";
				  document.querySelector(".blog-container").style.display="none";
                }
/*---------------------------------------------------------------------------------------------------------pop-up-items--------*/	
const popItemOne=document.getElementById("pop-item-one");	
       popItemOne.addEventListener("mouseover",pOne);
	   function pOne(){
		   document.querySelector(".main-page").style.opacity="0"
		   /*document.querySelector(".pop-up-sale").style.background="transparent"*/
		    document.querySelector(".pop-up-container").style.background="transparent"
			document.getElementById("pop-item-two").style.opacity="0"
			document.getElementById("pop-item-three").style.opacity="0"
			 document.querySelector(".body").style.backgroundImage="url('freecashbg.png')"
			 document.querySelector(".body").style.backgroundSize="100%"
									document.querySelector(".body").style.backgroundPosition="center"
												document.querySelector(".body").style.backgroundRepeat="noRepeat"
					if(window.matchMedia("(orientation:portrait)").matches){document.querySelector(".body").style.backgroundImage="url('freecashportrait.png')"
					                                              document.querySelector(".body").style.backgroundSize="100%"}
	   }
	   popItemOne.addEventListener("mouseout",pOnes);
	    function pOnes(){
		   document.querySelector(".main-page").style.opacity="1"
		  /* document.querySelector(".pop-up-sale").style.background="green"*/
		    document.querySelector(".pop-up-container").style.backgroundImage="linear-gradient(to bottom,transparent,transparent,gold)"
			document.getElementById("pop-item-two").style.opacity="1"
			document.getElementById("pop-item-three").style.opacity="1"
		let body=document.querySelector(".body").style.backgroundImage="linear-gradient(to bottom right,fuchsia,orange,yellow)"
		   
	   }
/*--------------------------------------------------------------------------------------------------------pop-up-items--*/
const popItemTwo=document.getElementById("pop-item-two");	
       popItemTwo.addEventListener("mouseover",pTwo);
	   function pTwo(){
		   document.querySelector(".main-page").style.opacity="0"
		  /* document.querySelector(".pop-up-sale").style.background="transparent"*/
		    document.querySelector(".pop-up-container").style.background="transparent"
			document.getElementById("pop-item-one").style.opacity="0"
			document.getElementById("pop-item-three").style.opacity="0"
			 document.querySelector(".body").style.backgroundImage="url('recruitdaybg.png')"
			 	document.querySelector(".body").style.backgroundSize="100%"
									document.querySelector(".body").style.backgroundPosition="center"
												document.querySelector(".body").style.backgroundRepeat="noRepeat"
					if(window.matchMedia("(orientation:portrait)").matches){document.querySelector(".body").style.backgroundImage="url('recruitdayportrait.png')"
					                                              document.querySelector(".body").style.backgroundSize="100%"}
	   }
	   popItemTwo.addEventListener("mouseout",pTwos);
	    function pTwos(){
		   document.querySelector(".main-page").style.opacity="1"
		  /* document.querySelector(".pop-up-sale").style.background="green"*/
		    document.querySelector(".pop-up-container").style.backgroundImage="linear-gradient(to bottom,transparent,transparent,fuchsia)"
			document.getElementById("pop-item-one").style.opacity="1"
			document.getElementById("pop-item-three").style.opacity="1"
			document.querySelector(".body").style.backgroundImage="linear-gradient(to bottom,blue,lightblue,fuchsia)"
	   }
	   popItemTwo.addEventListener("click",pTwoclick);
	   function pTwoclick(){
		   document.querySelector(".recruitday").style.display="block";
		   document.querySelector(".pop-up-sale").style.display="none";
		   }
/*----------------------------------------------------------------------------------------------------------*/
const popItemThree=document.getElementById("pop-item-three");	
       popItemThree.addEventListener("mouseover",pThree);
	   function pThree(){
		   document.querySelector(".main-page").style.opacity="0"
		   document.querySelector(".pop-up-sale").style.background="transparent"
		    document.querySelector(".pop-up-container").style.background="transparent"
			document.getElementById("pop-item-one").style.opacity="0"
			document.getElementById("pop-item-two").style.opacity="0"
			document.querySelector(".body").style.backgroundImage="url('3rdbg.png')"
						document.querySelector(".body").style.backgroundSize="100%"
									document.querySelector(".body").style.backgroundPosition="center"
												document.querySelector(".body").style.backgroundRepeat="noRepeat"
					if(window.matchMedia("(orientation:portrait)").matches){document.querySelector(".body").style.backgroundImage="url('3rdbg2.png')"
					                                              document.querySelector(".body").style.backgroundSize="100%"}
	   }   
	   popItemThree.addEventListener("mouseout",pThrees);
	    function pThrees(){
		   document.querySelector(".main-page").style.opacity="1"
		  /* document.querySelector(".pop-up-sale").style.background="green"*/
		    document.querySelector(".pop-up-container").style.backgroundImage="linear-gradient(to bottom,transparent,transparent,blue)"
			document.getElementById("pop-item-one").style.opacity="1"
			document.getElementById("pop-item-two").style.opacity="1"
			document.querySelector(".body").style.backgroundImage="linear-gradient(to bottom left,green,lightgreen,blue)"
	   }
/*--------------------------------------------------------------------------------------------------------pop-up-items--*/


const navLeft=document.querySelector(".nav-left");
      navLeft.addEventListener("click",navLefts);
	  function navLefts(){
		  document.querySelector(".main-page").style.opacity="0";/*--not essential for block level----*/
		   document.querySelector(".main-page").style.display="none"
		  document.querySelector(".left-page").style.display="block";
		  document.querySelector(".left-page").style.opacity="1";/*--not essential for block level----*/
		    document.querySelector(".right-page").style.opacity="0";/*--not essential for block level----*/
			document.querySelector(".right-page").style.display="none"
		  
	  };
const navCenter=document.querySelector(".nav-center");
      navCenter.addEventListener("click",navCenters);
	  function navCenters(){
		  document.querySelector(".main-page").style.display="block";
		  document.querySelector(".main-page").style.opacity="1";/*--not essential for block level----*/
		  document.querySelector(".left-page").style.display="none";
		  document.querySelector(".left-page").style.opacity="0";/*--not essential for block level----*/
		  document.querySelector(".right-page").style.display="none";
		  document.querySelector(".right-page").style.opacity="0";/*--not essential for block level----*/
		  
	  }	; 
const navRight=document.querySelector(".nav-right");
      navRight.addEventListener("click",navRights);
	  function navRights(){
		  document.querySelector(".main-page").style.display="none";
		   document.querySelector(".main-page").style.opacity="0";/*--not essential for block level----*/
		  document.querySelector(".left-page").style.display="none";
		  	  document.querySelector(".left-page").style.opacity="0";/*--not essential for block level----*/
		  document.querySelector(".right-page").style.display="block";
		  document.querySelector(".right-page").style.opacity="1";/*--not essential for block level----*/
		  
	  }	 ; 	  
    /*--------------------------------------------------------------------------------*/	  
	const about=document.querySelector("#about1");  
	const freebies=document.querySelector("#freebies2"); 
    const partners=document.querySelector("#partners3");
    const blogs=document.querySelector("#partners4");
    const shop=document.querySelector("#partners5"); 
   const more=document.querySelector("#partners6");
   const moreCont=document.querySelector(".more");
   const movies=document.querySelector(".freees");   
	  
about.addEventListener("click",aBout);
function aBout(){document.querySelector(".about").style.display="block"
                  document.querySelector(".freebies").style.display="none"
				  document.querySelector(".partners").style.display="none"
				   document.querySelector(".pop-up-sale").style.display="none";
				   
				   document.querySelector(".main-page").style.display="none";
				   document.querySelector(".left-page").style.display="none";
				    document.querySelector(".right-page").style.display="none";
					 document.querySelector(".recent-next-page").style.display="none"
					 document.querySelector(".recruitday").style.display="none"
					  document.querySelector(".blog-container").style.display="none"}

freebies.addEventListener("click",freeBies);
function freeBies(){document.querySelector(".about").style.display="none"
                  document.querySelector(".freebies").style.display="block"
				  document.querySelector(".partners").style.display="none"
				   document.querySelector(".pop-up-sale").style.display="none";
				   
				   document.querySelector(".main-page").style.display="none";
				   document.querySelector(".left-page").style.display="none";
				    document.querySelector(".right-page").style.display="none";
					 document.querySelector(".recent-next-page").style.display="none"
					 document.querySelector(".recruitday").style.display="none"
					 moreCont.style.display="none"
					  document.querySelector(".blog-container").style.display="none"}	

partners.addEventListener("click",partNers);
function partNers(){document.querySelector(".about").style.display="none"
                  document.querySelector(".freebies").style.display="none"
				  document.querySelector(".partners").style.display="block"
				   document.querySelector(".pop-up-sale").style.display="none";
				   
				   document.querySelector(".main-page").style.display="none";
				   document.querySelector(".left-page").style.display="none";
				    document.querySelector(".right-page").style.display="none";
					 document.querySelector(".recent-next-page").style.display="none"
					 document.querySelector(".recruitday").style.display="none" 
                        document.querySelector(".blog-container").style.display="none"
						}	
					 
blogs.addEventListener("click",bVlogs);
function bVlogs(){   document.querySelector(".about").style.display="none"
                     document.querySelector(".freebies").style.display="none"
				     document.querySelector(".partners").style.display="none"
				     document.querySelector(".pop-up-sale").style.display="none";
				     document.querySelector(".main-page").style.display="none";
				     document.querySelector(".left-page").style.display="none";
				     document.querySelector(".right-page").style.display="none";
					 document.querySelector(".recent-next-page").style.display="none"
					 document.querySelector(".recruitday").style.display="none"  
					 document.querySelector(".blog-container").style.display="block"  
                     document.querySelector(".more").style.display="none";
     					 
			     let moreExternal=document.querySelectorAll(".more-content");
				 for(let x=0;x<moreExternal.length;x++){moreExternal[x].style.display="none";}
				  
					 }	
shop.addEventListener("click",sHop);
function sHop(){   document.querySelector(".about").style.display="none"
                     document.querySelector(".freebies").style.display="none"
				     document.querySelector(".partners").style.display="none"
				     document.querySelector(".pop-up-sale").style.display="none";
				     
				     document.querySelector(".left-page").style.display="none";
				     document.querySelector(".right-page").style.display="none";
					 document.querySelector(".recent-next-page").style.display="block"
					 document.querySelector(".recruitday").style.display="none"  
					 document.querySelector(".blog-container").style.display="none" 
                     document.querySelector(".main-page").style.display="block";					 
                     moreCont.style.display="none";
					 }		
more.addEventListener("click",moRe);
function moRe(){   document.querySelector(".about").style.display="none"
                     document.querySelector(".freebies").style.display="none"
				     document.querySelector(".partners").style.display="none"
				     document.querySelector(".pop-up-sale").style.display="none";
				     
				     document.querySelector(".left-page").style.display="none";
				     document.querySelector(".right-page").style.display="none";
					 document.querySelector(".recent-next-page").style.display="none"
					 document.querySelector(".recruitday").style.display="none"  
					 document.querySelector(".blog-container").style.display="none" 
                     document.querySelector(".main-page").style.display="none";	
                    document.querySelector(".more").style.display="block";	
                     movies.style.display="none";					
                     
					 }		
					 
	   /*--------------------------------------------------------------------------------*/
	   
      const aboutExt=document.querySelector(".pop-up-one-exit1")
      const freebiesExt=document.querySelector(".pop-up-one-exit2")	  
	  const partnersExt=document.querySelector(".pop-up-one-exit3")
	   const recruitdayExt=document.querySelector(".pop-up-one-exit4")
	   const moviesExt=document.querySelector(".pop-up-one-exit5")
	   const blogsExt=document.querySelector(".pop-up-one-exit6")
	   const moreExt=document.querySelector(".pop-up-one-exit7")
	   const mcE1=document.querySelector(".pop-up-one-exit8")
	   const mcE2=document.querySelector(".pop-up-one-exit9")
	   const mcE3=document.querySelector(".pop-up-one-exit10")
	   const mcE4=document.querySelector(".pop-up-one-exit11")
	   const mcE5=document.querySelector(".pop-up-one-exit12")
	   const mcE6=document.querySelector(".pop-up-one-exit13")
	   const mcE7=document.querySelector(".pop-up-one-exit14")
	   const mcE8=document.querySelector(".pop-up-one-exit15")
	   
	   
	   
	   const freeItems1=document.querySelector("#free1") 
	   const freeItems2=document.querySelector("#free2") 
	   const freeItems3=document.querySelector("#free3") 
	   const freeItems4=document.querySelector("#free4") 
	   const freebitems=document.querySelector(".free-box-items")
	   
  
	   
	   
	   
	   
	   
aboutExt.addEventListener("click",abtExt);
function abtExt(){document.querySelector(".about").style.display="none"
                  document.querySelector(".freebies").style.display="none"
				  document.querySelector(".partners").style.display="none"
				  
				  document.querySelector(".pop-up-sale").style.display="block";
				  
			
                  }	  
freebiesExt.addEventListener("click",freebExt);
function freebExt(){document.querySelector(".about").style.display="none"
                  document.querySelector(".freebies").style.display="none"
				  document.querySelector(".partners").style.display="none"
				   document.querySelector(".pop-up-sale").style.display="block";
				   
				   
                  }	  
partnersExt.addEventListener("click",partnrsExt);
function partnrsExt(){document.querySelector(".about").style.display="none"
                  document.querySelector(".freebies").style.display="none"
				  document.querySelector(".partners").style.display="none"
				   document.querySelector(".pop-up-sale").style.display="block"
				   
                  }
recruitdayExt.addEventListener("click",recruitExt);
function recruitExt(){document.querySelector(".about").style.display="none"
                  document.querySelector(".freebies").style.display="none"
				  document.querySelector(".partners").style.display="none"
				   document.querySelector(".pop-up-sale").style.display="block"
				   document.querySelector(".recruitday").style.display="none"
				   
                  }
moviesExt.addEventListener("click",movExt);
function movExt(){ document.querySelector(".freees").style.display="none"
				 document.querySelector(".pop-up-sale").style.display="block"
                  }
blogsExt.addEventListener("click",vlogzExt);
function vlogzExt(){ document.querySelector(".blog-container").style.display="none"
				 document.querySelector(".pop-up-sale").style.display="block"
				 let moreExternal=document.querySelectorAll(".more-content");
				 for(let x=0;x<moreExternal.length;x++){moreExternal[x].style.display="none";}
                  }		
moreExt.addEventListener("click",moExt);
function moExt(){ document.querySelector(".more").style.display="none"
				 document.querySelector(".pop-up-sale").style.display="block"
                  }				  
				  
freeItems1.addEventListener("click",frItm);
function frItm(){document.querySelector(".freees").style.display="block"
                 document.querySelector(".about").style.display="none"
                  document.querySelector(".freebies").style.display="none"
				  document.querySelector(".partners").style.display="none"
				   document.querySelector(".pop-up-sale").style.display="none"
				   document.querySelector(".recruitday").style.display="none"
				   document.querySelector(".blog-container").style.display="none"
				   
                  }
freeItems2.addEventListener("click",frItm2);
function frItm2(){document.querySelector(".freees").style.display="block"
                 document.querySelector(".about").style.display="none"
                  document.querySelector(".freebies").style.display="none"
				  document.querySelector(".partners").style.display="none"
				   document.querySelector(".pop-up-sale").style.display="none"
				   document.querySelector(".recruitday").style.display="none"
				   document.querySelector(".blog-container").style.display="none"
                  }
/*freeItems3.addEventListener("click",frItm3);
function frItm3(){document.querySelector(".freees").style.display="block"
                 document.querySelector(".about").style.display="none"
                  document.querySelector(".freebies").style.display="none"
				  document.querySelector(".partners").style.display="none"
				   document.querySelector(".pop-up-sale").style.display="none"
				   document.querySelector(".recruitday").style.display="none"
				   document.querySelector(".blog-container").style.display="none"
                  }
freeItems4.addEventListener("click",frItm4);
function frItm4(){document.querySelector(".freees").style.display="block"
                 document.querySelector(".about").style.display="none"
                  document.querySelector(".freebies").style.display="none"
				  document.querySelector(".partners").style.display="none"
				   document.querySelector(".pop-up-sale").style.display="none"
				   document.querySelector(".recruitday").style.display="none"
				  document.querySelector(".blog-container").style.display="none" 
                  }*/
				  
function itemOne(){window.open("https://freecash.com/r/5c5875dd48","_blank");}
function itemTwo(){window.open("","_self");}
function itemThree(){window.open("https://alison.com/?utm_source=alison_user&utm_medium=affiliates&utm_campaign=11682105","_blank");}





/*function freeOne(){window.open("",'_blank');}	/*---  pls  put a link  where you can give the free offers -------*/


function job1(){window.open("https://www.recruitday.com/jobs/fullstack-developer-at-software-development-inc-10706?ref=119631","_blank");}
function job2(){window.open("https://www.recruitday.com/jobs/software-fullstack-angular-at-hospitals-and-health-care-10376?ref=119631","_blank");}
function job3(){window.open("https://www.recruitday.com/jobs/systems-engineer-at-specialty-insurance-company-10696?ref=119631","_blank");}


/*function dlIdm(){window.open("https://www.internetdownloadmanager.com/getlatestversion.html?ai=200305142",'_blank');}*/
/*------------------------------------------------------------------------------------------------------------------------------*/
const blogOne=document.querySelector(".blogOne");
const blogTwo=document.querySelector(".blogTwo");
const blogThree=document.querySelector(".blogThree");
const blogFour=document.querySelector(".blogFour");
const blogFive=document.querySelector(".blogFive");
/*---------------------------------------------*/
const blog1=document.querySelector("#bOne");
const blog2=document.querySelector("#bTwo");
const blog3=document.querySelector("#bThree");
const blog4=document.querySelector("#bFour");
const blog5=document.querySelector("#bFive");
/*---------------------------------------------*/
const circle1=document.querySelector("#c1");
const circle2=document.querySelector("#c2");
const circle3=document.querySelector("#c3");
const circle4=document.querySelector("#c4");
const circle5=document.querySelector("#c5");
/*---------------------------------------------*/

circle1.addEventListener("click",clickOne);
function clickOne(){blogOne.style.display="block"
                    blogTwo.style.display="none"
					blogThree.style.display="none"
					blogFour.style.display="none"
					blogFive.style.display="none"
					
					blog1.style.display="block"
					blog2.style.display="none"
					blog3.style.display="none"
					blog4.style.display="none"
					blog5.style.display="none"};
					
circle2.addEventListener("click",clickTwo);
function clickTwo(){blogOne.style.display="none"
                    blogTwo.style.display="block"
					blogThree.style.display="none"
					blogFour.style.display="none"
					blogFive.style.display="none"
					
					blog1.style.display="none"
					blog2.style.display="block"
					blog3.style.display="none"
					blog4.style.display="none"
					blog5.style.display="none"}
					
circle3.addEventListener("click",clickThree);
function clickThree(){blogOne.style.display="none"
                    blogTwo.style.display="none"
					blogThree.style.display="block"
					blogFour.style.display="none"
					blogFive.style.display="none"
					
					blog1.style.display="none"
					blog2.style.display="none"
					blog3.style.display="block"
					blog4.style.display="none"
					blog5.style.display="none"}
					
circle4.addEventListener("click",clickFour);
function clickFour(){blogOne.style.display="none"
                    blogTwo.style.display="none"
					blogThree.style.display="none"
					blogFour.style.display="block"
					blogFive.style.display="none"
					
					blog1.style.display="none"
					blog2.style.display="none"
					blog3.style.display="none"
					blog4.style.display="block"
					blog5.style.display="none"}
					
circle5.addEventListener("click",clickFive);
function clickFive(){blogOne.style.display="none"
                    blogTwo.style.display="none"
					blogThree.style.display="none"
					blogFour.style.display="none"
					blogFive.style.display="block"
					
					blog1.style.display="none"
					blog2.style.display="none"
					blog3.style.display="none"
					blog4.style.display="none"
					blog5.style.display="block"}

/*-------------------------------------------------More -box ---------------------------------------------------------*/
const m1=document.getElementById("more1");
const m2=document.getElementById("more2");
const m3=document.getElementById("more3");
const m4=document.getElementById("more4");
const m5=document.getElementById("more5");
const m6=document.getElementById("more6");
const m7=document.getElementById("more7");
const m8=document.getElementById("more8");

const moreBox=document.querySelector(".more");
const mc1=document.querySelector("#mc1");
const mc2=document.querySelector("#mc2");
const mc3=document.querySelector("#mc3");
const mc4=document.querySelector("#mc4");
const mc5=document.querySelector("#mc5");
const mc6=document.querySelector("#mc6");
const mc7=document.querySelector("#mc7");
const mc8=document.querySelector("#mc8");

m1.addEventListener("click",moOne);
function moOne(){moreBox.style.display="none"
                  mc1.style.display="block"
				  mc2.style.display="none"
				  mc3.style.display="none"
				  mc4.style.display="none"
				  mc5.style.display="none"
				  mc6.style.display="none"
				  mc7.style.display="none"
				  mc8.style.display="none"};

m2.addEventListener("click",moTwo);
function moTwo(){moreBox.style.display="none"
                 mc2.style.display="block"
				  mc1.style.display="none"
				   mc3.style.display="none"
				  mc4.style.display="none"
				  mc5.style.display="none"
				  mc6.style.display="none"
				  mc7.style.display="none"
				  mc8.style.display="none"};

m3.addEventListener("click",moThree);
function moThree(){moreBox.style.display="none"
                   mc1.style.display="none"
				  mc2.style.display="none"
				  mc3.style.display="block"
				  mc4.style.display="none"
				  mc5.style.display="none"
				  mc6.style.display="none"
				  mc7.style.display="none"
				  mc8.style.display="none"};

m4.addEventListener("click",moFour);
function moFour(){moreBox.style.display="none"
                  mc1.style.display="none"
				  mc2.style.display="none"
				  mc3.style.display="none"
				  mc4.style.display="block"
				  mc5.style.display="none"
				  mc6.style.display="none"
				  mc7.style.display="none"
				  mc8.style.display="none"};

m5.addEventListener("click",moFive);
function moFive(){moreBox.style.display="none"
                  mc1.style.display="none"
				  mc2.style.display="none"
				  mc3.style.display="none"
				  mc4.style.display="none"
				  mc5.style.display="block"
				  mc6.style.display="none"
				  mc7.style.display="none"
				  mc8.style.display="none"};

m6.addEventListener("click",moSix);
function moSix(){moreBox.style.display="none"
                  mc1.style.display="none"
				  mc2.style.display="none"
				  mc3.style.display="none"
				  mc4.style.display="none"
				  mc5.style.display="none"
				  mc6.style.display="block"
				  mc7.style.display="none"
				  mc8.style.display="none"};

m7.addEventListener("click",moSeven);
function moSeven(){moreBox.style.display="none"
                   mc1.style.display="none"
				  mc2.style.display="none"
				  mc3.style.display="none"
				  mc4.style.display="none"
				  mc5.style.display="none"
				  mc6.style.display="none"
				  mc7.style.display="block"
				  mc8.style.display="none"};

m8.addEventListener("click",moEight);
function moEight(){moreBox.style.display="none"
                    mc1.style.display="none"
				  mc2.style.display="none"
				  mc3.style.display="none"
				  mc4.style.display="none"
				  mc5.style.display="none"
				  mc6.style.display="none"
				  mc7.style.display="none"
				  mc8.style.display="block"};

/*-------------------------------------------------------------------*/
mcE1.addEventListener("click",mc1Ext);
function mc1Ext(){mc1.style.display="none"
                  moreBox.style.display="block"};

mcE2.addEventListener("click",mc2Ext);
function mc2Ext(){mc2.style.display="none"
                  moreBox.style.display="block"};

mcE3.addEventListener("click",mc3Ext);
function mc3Ext(){mc3.style.display="none"
                  moreBox.style.display="block"};

mcE4.addEventListener("click",mc4Ext);
function mc4Ext(){mc4.style.display="none"
                  moreBox.style.display="block"};

mcE5.addEventListener("click",mc5Ext);
function mc5Ext(){mc5.style.display="none"
                   moreBox.style.display="block"};

mcE6.addEventListener("click",mc6Ext);
function mc6Ext(){mc6.style.display="none"
                   moreBox.style.display="block"};

mcE7.addEventListener("click",mc7Ext);
function mc7Ext(){mc7.style.display="none"
                  moreBox.style.display="block"};

mcE8.addEventListener("click",mc8Ext);
function mc8Ext(){mc8.style.display="none"
                   moreBox.style.display="block"};/*--------------------CODE  CONTINUATION  -------------------------*/


/*----------                            #FRAMEWORK USERS SUCK!!! LONG LIVE  VANILLA JAVASCRIPT!!!!!!!!!              ---------------------------------------------------*/


/*----It may not look the same but  our inspiration for making this website  is  https://www.makingsenseofcents.com/     ----------------*/