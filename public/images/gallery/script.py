from PIL import Image

image = Image.open('31.jpg')
image.thumbnail((800,800))
image.save('31.jpg')
print(image)
