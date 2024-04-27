from flask import jsonify

problematic_pokemons_numbers = [29, 32, 83, 122]

def get_page_with_img_url(pokemon_list, page_size, page_number, last_pokemon_on_page):
    try:
        page_size = int(page_size)
        page_number = int(page_number)
        
        start_index = last_pokemon_on_page
        end_index = start_index + page_size 

        paginated_list = pokemon_list[start_index:end_index]

        last_pokemon_on_page += len(paginated_list)
        
        next_page = pokemon_list[end_index:end_index + page_size] if end_index < len(pokemon_list) else []

        paginated_list = enrich_page_with_img_url(paginated_list)
        next_page = enrich_page_with_img_url(next_page)

        return paginated_list, next_page, last_pokemon_on_page
    except Exception as e:
        print(f"Error in get_page_with_img_url: {e}")
        return jsonify({"error": "Failed to get page with image URL."}), 500

def format_pokemon_name(string):
    words = string.split()
    if len(words) >= 2:
        formatted_name = f"{words[1]}-mega"
        if len(words) > 2:
            formatted_name += f"-{'-'.join(words[2:])}"
    else:
        formatted_name = string
    return formatted_name

def insert_img_url(pokemon_name, pokemon):
    if 'mega' in pokemon_name.lower():
        pokemon['imgURL'] = f"https://img.pokemondb.net/sprites/home/normal/{format_pokemon_name(pokemon_name.lower())}.png"
    else:
        pokemon['imgURL'] = f"https://img.pokemondb.net/sprites/brilliant-diamond-shining-pearl/normal/{pokemon_name.lower()}.png"
    return pokemon

def adjust_pokemon_name(pokemon_name):
    substring_replacements = {"♀": "-f", "♂": "-m", "'": "", ". ": "-"}
    for substring, replacement in substring_replacements.items():
        pokemon_name = pokemon_name.replace(substring, replacement)
    pokemon_name = pokemon_name.replace(". ", "-")
    return pokemon_name

def enrich_page_with_img_url(paginated_list):
    for pokemon in paginated_list:
        if pokemon["number"] in problematic_pokemons_numbers:
            pokemon['name'] = adjust_pokemon_name(pokemon['name'])
        pokemon = insert_img_url(pokemon['name'], pokemon)

    return paginated_list
