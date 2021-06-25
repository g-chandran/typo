import requests
from bs4 import BeautifulSoup
import random

URL = "https://wordfind.com/length/7-letter-words/"

page = requests.get(URL)
soup = BeautifulSoup(page.content, "html.parser")

lists = soup.find_all(class_="dl")
data = []
for l in lists:
    word = l.find('a').text.strip()
    data.append(word)

print(len(data))
print(random.sample(data, 100))
