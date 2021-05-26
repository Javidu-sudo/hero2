var canvas = new fabric.Canvas('myCanvas')
var player_X = 10
var player_Y = 10
var block_img_width = 30
var block_img_height = 30
var block_object =""
var player_object = ""

function player_update(){
    fabric.Image.fromURL('player.png',function(Img){
        player_object = Img
        player_object.scaleToWidth(150)
        player_object.scaleToHeight(150)
        player_object.set({
            top:player_Y,
            left:player_X
        })
        canvas.add(player_object);
    })
}
function new_img(get_img){
    fabric.Image.fromURL(get_img,function(Img){
        block_object = Img
        block_object.scaleToWidth(block_img_width)
        block_object.scaleToHeight(block_img_height)
        block_object.set({
            top:player_Y,
            left:player_X
        })
        canvas.add(block_object);
    })
}
window.addEventListener('keydown',my_Keydown)
function my_Keydown(e){
    keypressed = e.keyCode
    if (e.shiftKey == true && keypressed == '80'){
        console.log('shift and p pressed')
        block_img_height = block_img_height +10
        block_img_width = block_img_width +10
        document.getElementById('canvas_width').innerHTML = block_img_width;
        document.getElementById('canvas_height').innerHTML = block_img_height
    }
    if (e.shiftKey == true && keypressed == '77'){
        console.log('shift and m pressed')
        block_img_height = block_img_height -10
        block_img_width = block_img_width -10
        document.getElementById('canvas_width').innerHTML = block_img_width;
        document.getElementById('canvas_height').innerHTML = block_img_height
    }

    if(keypressed == '38'){
        up()
        console.log("up arrow")
    }

    if(keypressed == '40'){
      down()
        console.log("down arrow")
    }
    if(keypressed == '37'){
        left()
          console.log("left arrow")
      }
      if(keypressed == '39'){
        right()
          console.log("right arrow")
      }
      if(keypressed == '69'){
        new_img("captain_america_left_hand")
          console.log("hand")
      }
      if(keypressed == '70'){
        new_img("hulk_face.png")
          console.log("f")
      }
      if(keypressed == '71'){
        new_img("hulk_left_hand.png")
          console.log("hlh")
      }
      if(keypressed == '72'){
        new_img("hulk_legs.png")
          console.log("hl")
      }
      if(keypressed == '73'){
        new_img("hulk_right_hand.jpg")
          console.log("hrl")
      }
      if(keypressed == '74'){
        new_img("hulkd_body.jpg")
          console.log("hb")
      }
      if(keypressed == '75'){
        new_img("ironman_body.png")
          console.log("ib")
      }
      if(keypressed == '76'){
        new_img("ironman_face.jpg")
          console.log("if")
      }
      if(keypressed == '77'){
        new_img("ironman_left_hand.png")
          console.log("ilh")
      }
      if(keypressed == '78'){
        new_img("ironman_legs.png")
          console.log("il")
      }
      if(keypressed == '79'){
        new_img("ironman_right_hand.png")
          console.log("irh")
      }
      if(keypressed == '80'){
        new_img("spiderman_body.png")
          console.log("sb")
      }
      if(keypressed == '81'){
        new_img("spiderman_face.png")
          console.log("sf")
      }
      if(keypressed == '82'){
        new_img("spiderman_left_hand.png")
          console.log("slh")
      }
      if(keypressed == '83'){
        new_img("spiderman_legs.png")
          console.log("sl")
      }
      if(keypressed == '84'){
        new_img("spiderman_right_hand.png")
          console.log("srh")
      }
      if(keypressed == '85'){
        new_img("thor_face.png")
          console.log("tf")
      }
      if(keypressed == '86'){
        new_img("thor_left_hand.png")
          console.log("tlh")
      }
      if(keypressed == '87'){
        new_img("thor_right_hand.png")
          console.log("trh")
      }

      

}
function up(){
  if (player_Y>0){
    player_Y = player_Y-block_img_height
    canvas.remove(player_object)
    player_update()
  }
}
function down(){
  if (player_Y<500){
player_Y = player_Y + block_img_height
canvas.remove(player_object)
player_update()
  }
}
function right(){
  if (player_X<850){
    player_X = player_X + block_img_width
    canvas.remove(player_object)
    player_update()

  }
}
function left(){
  if (player_X>0){
    player_X = player_X - block_img_width
    canvas.remove(player_object)
    player_update()
  }
}

