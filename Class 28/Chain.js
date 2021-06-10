class Chain{
    constructor(bodyA,pointB){

        var ball={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.pointB=pointB
        this.chain=Constraint.create(ball)
        World.add(world,this.chain)
  }
  fly(){
    this.chain.bodyA=null
  }
  display(){
    if (this.chain.bodyA){
      var A=this.chain.bodyA.position
var B=this.pointB
strokeWeight(4)
stroke("blue")
line(A.x,A.y,B.x,B.y)
    }

  }
}