import requests
import json
imageList = []

with open('images.json') as file:
    imageList = json.load(file)

for i, imgUrl in enumerate(imageList):
    response = requests.get(imgUrl)
    if response.status_code:
        with open(f'gallery/{i}.jpg','wb') as file:
            file.write(response.content)
            

