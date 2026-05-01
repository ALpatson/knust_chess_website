from PIL import Image
import os

img_path = r'c:\Users\cobbi\Desktop\KNUST_Site\public\asset\Club_logo_1.png'
if os.path.exists(img_path):
    with Image.open(img_path) as img:
        print(f"Dimensions: {img.size}")
else:
    print("File not found")
