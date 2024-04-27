from flask import Flask, jsonify, request
from flask_cors import CORS
import db
from helpers import get_page_with_img_url
import time

app = Flask(__name__)
CORS(app)

pokemon_data = db.get()
last_pokemon_on_page = 0
current_pokemon_list = []

@app.route('/get')
def get_pokemons_by_page_number():
    try:
        # time.sleep(2) # simulate a 2 sec call to the API to see the loader
        response_object = {}
        global last_pokemon_on_page
        global pokemon_data
        global current_pokemon_list
        page_size_param = request.args.get('size', '10')
        page_number_param = request.args.get('page', '1')
        fetch_all_pokemons = request.args.get('fetchAllPokemons', '').lower()

        fetch_all_pokemons = fetch_all_pokemons == 'true'
        if bool(fetch_all_pokemons):
            page_size_param = len(pokemon_data)
            paginated_list, next_page, _ = get_page_with_img_url(pokemon_data, page_size_param, page_number_param, 0)
        else:
            paginated_list, next_page, last_pokemon_on_page = get_page_with_img_url(pokemon_data, page_size_param, page_number_param, last_pokemon_on_page)
        has_next_page = bool(next_page)
        response_object["pokemonsList"] = paginated_list if page_number_param else current_pokemon_list
        response_object["hasNextPage"] = True if has_next_page else False
        response_object["msg"] = f'Fetched {len(paginated_list)} Pokemons'
        current_pokemon_list += paginated_list
        return jsonify(response_object)
    except Exception as e:
        print(f"Error in get_pokemons_by_page_number: {e}")
        return jsonify({"error": e}), 500 


@app.route('/put', methods=['PUT'])
def capture_pokemon():
    response_object = {}
    try:
        pokemon_name_to_capture_or_release = request.args.get('pokemonName')
        is_captured = True if request.args.get('isCaptured') == 'true' else False
        for pokemon in current_pokemon_list:
            if pokemon['name'] == pokemon_name_to_capture_or_release:
                pokemon["isCaptured"] = is_captured
                break
        response_object["msg"] = ('Captured' if is_captured else 'Released') + ' ' + pokemon_name_to_capture_or_release
        return jsonify(response_object)
    except Exception as e:
        print(f"Error in get_pokemons_by_page_number: {e}")
        return jsonify({"error": e}), 500 



if __name__ == '__main__':
    app.run(port=8080)
