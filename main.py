main_character = game.create_sprite(2, 2)
food_1 = game.create_sprite(4, 4)
a =randint(0, 4)
food_2 = game.create_sprite(a, 2)
food_3 = game.create_sprite(2, a)
food_1.set(LedSpriteProperty.BRIGHTNESS, 8)
food_2.set(LedSpriteProperty.BRIGHTNESS, 8)
food_3.set(LedSpriteProperty.BRIGHTNESS, 8)
questions=['Favorite anime?','Favorite rapper?','Favorite game?']
while True:
    basic.pause(400)
    if input.acceleration(Dimension.X) > 200:
        main_character.change(LedSpriteProperty.X, 1)
    elif input.acceleration(Dimension.X) < -200:
        main_character.change(LedSpriteProperty.X, -1)
    if input.acceleration(Dimension.Y) > 200:
        main_character.change(LedSpriteProperty.Y, 1)
    elif input.acceleration(Dimension.Y) > -200:
        main_character.change(LedSpriteProperty.Y, -1)
    if main_character.is_touching(food_1):
        basic.show_string(questions[0])
        basic.pause(4000)
        food_1.delete()
    if main_character.is_touching(food_2):
            basic.show_string(questions[1])
            basic.pause(4000)
            food_2.delete()
    if main_character.is_touching(food_3):
            basic.show_string(questions[2])
            basic.pause(4000)
            food_3.delete()