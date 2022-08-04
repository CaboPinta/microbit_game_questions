let main_character = game.createSprite(2, 2)
let food_1 = game.createSprite(4, 4)
let a = randint(0, 4)
let food_2 = game.createSprite(a, 2)
let food_3 = game.createSprite(2, a)
food_1.set(LedSpriteProperty.Brightness, 8)
food_2.set(LedSpriteProperty.Brightness, 8)
food_3.set(LedSpriteProperty.Brightness, 8)
let questions = ["Favorite anime?", "Favorite rapper?", "Favorite game?"]
while (true) {
    basic.pause(400)
    if (input.acceleration(Dimension.X) > 200) {
        main_character.change(LedSpriteProperty.X, 1)
    } else if (input.acceleration(Dimension.X) < -200) {
        main_character.change(LedSpriteProperty.X, -1)
    }
    
    if (input.acceleration(Dimension.Y) > 200) {
        main_character.change(LedSpriteProperty.Y, 1)
    } else if (input.acceleration(Dimension.Y) > -200) {
        main_character.change(LedSpriteProperty.Y, -1)
    }
    
    if (main_character.isTouching(food_1)) {
        basic.showString(questions[0])
        basic.pause(4000)
        food_1.delete()
    }
    
    if (main_character.isTouching(food_2)) {
        basic.showString(questions[1])
        basic.pause(4000)
        food_2.delete()
    }
    
    if (main_character.isTouching(food_3)) {
        basic.showString(questions[2])
        basic.pause(4000)
        food_3.delete()
    }
    
}
