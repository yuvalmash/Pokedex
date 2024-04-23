from flask import Flask, jsonify, request
from flask_cors import CORS
import db
from helpers import get_page_with_img_url
import time

app = Flask(__name__)
CORS(app)

pokemons = []
responseObject = {}
data = []
lastPokemonOnPage = 0


@app.route('/icon/<name>')
def get_icon_url(name: str):
    return f"https://img.pokemondb.net/sprites/silver/normal/{name}.png"


@app.route('/')
def init():
    global data
    data = db.get()  # Loading all the pokemons is mandatory because of the design and constraints
    # pokemons = splitToPages(data)
    # return jsonify(pokemons.get("1"))


@app.route('/get')
def get_pokemons_by_page_number():
    # time.sleep(2) # simulate a 2 sec call to the API to see the loader
    global pokemons
    global responseObject
    global lastPokemonOnPage
    pageSizeParam = request.args.get('size', '10')
    pageNumberParam = request.args.get('page', '1')

    if len(data) == 0:
        init()
    paginated_list, next_page, lastPokemonOnPage = get_page_with_img_url(data, pageSizeParam, pageNumberParam, lastPokemonOnPage)
    hasNextPage = bool(next_page)
    responseObject["pokemonsList"] = paginated_list if pageNumberParam else pokemons
    responseObject["hasNextPage"] = True if hasNextPage else False
    return jsonify(responseObject)


if __name__ == '__main__':
    app.run(port=8080)
