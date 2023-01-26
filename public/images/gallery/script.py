from PIL import Image
import os

def opt_images():
    for i in range(31,59):
        image = Image.open(f'{i}.jpg')
        image.thumbnail((700,700))
        image.save(f'{i}.jpg')
        print(image.size)

def rename():
    i = 46

    while i <= 58:
        os.rename(f'{i}.jpg', f'{i-1}.jpg')
        i+=1
opt_images()