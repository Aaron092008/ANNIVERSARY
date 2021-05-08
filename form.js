class Form{
constructor(){
    this.heading = createElement('h1')
    this.inputbox=createInput("DAD PLEASE ENTER YOUR NAME ")
    this.inputbox2=createInput("MOM PLEASE ENTER YOUR NAME ")
    this.button=createButton("NEXT ->")
this.greeting=createElement("h1")
this.greeting2=createElement("h1")
this.next=createButton("NEXT")
this.heading1 = createElement('h1')
this.wishes= createElement('h1')
this.wishes2= createElement('h1')
this.next2= createButton("NEXT ->")
this.next3= createButton("NEXT ->")
this.wishes3= createElement('h1')
}

Display(){
this.heading.html("HAPPY 14th ANNIVERSARY MOM AND DAD ")
//this.heading1.html("ANNIVERSARY WISHES")
this.heading.style("color","pink")
this.heading.position(250,50)
this.inputbox.position(250,350)
this.inputbox2.position(250,300)
this.inputbox.style('width','300px')
this.inputbox2.style('width','300px')
this.inputbox.style('background',"purple")
this.inputbox2.style('background',"purple")
this.button.position(250,400)
this.next.hide()
this.next2.hide()
this.next3.hide()
this.wishes.hide()
this.wishes2.hide()
this.wishes3.hide()

this.button.mousePressed(()=>{
    this.inputbox.hide()
    this.inputbox2.hide()
    this.button.hide()

    
    var name=this.inputbox2.value()
    this.greeting.position(250,300)
    this.greeting.html("HELLO "+ name)
    this.greeting.style('background',"white")
    
    var name=this.inputbox.value()
    this.greeting2.position(250,200)
    this.greeting2.html("HELLO "+ name)
    this.greeting2.style('background',"white")
    this.next.position(250,450)
    this.next.show()
})
this.next.mousePressed(()=>{
    this.greeting.hide()
    this.greeting2.hide()
    this.heading.hide()
    this.next.hide()
    b=loadImage("image.jpg")
    this.next2.position(250,470)
    this.next2.show()


})
this.next2.mousePressed(()=>{
    this.wishes2.show()
    this.wishes.show()
    this.wishes.html("WISHES OF THE YEAR")
    this.wishes.position(250,120)
    this.next2.hide()
    this.wishes2.position(50,250)
    this.wishes2.html("“Wishing a perfect pair a perfectly happy dayHere's to another year of being great together!Anniversary cheers!Happy [14th] anniversary, you old lovebirds! Hope you find time to look back on all your sweet memories together.Always knew you two had something special.")
    b="pink"
    this.next3.position(250,470)
    this.next3.show()
    
})
this.next3.mousePressed(()=>{
    b="pink"
    this.wishes2.hide()
    this.next3.hide()
    this.wishes3.show()
    this.wishes3.position(250,250)
    this.wishes3.html("THANK YOU")
        this.greeting2.hide()
    
})
}

}