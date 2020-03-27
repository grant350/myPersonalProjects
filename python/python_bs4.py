from bs4 import BeautifulSoup as bs4
import requests;
url = requests.get("http://www.clothesabyss.com")
print(url.status_code)

soup = bs4(url.content, "html.parser")

print(soup.prettify())
