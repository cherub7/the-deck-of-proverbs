import json

chapter = 20
file_name = f'ch{chapter}'

# Specify the path to your JSON file
file_path = f'./data/{file_name}.json'

# Open and read the JSON file
with open(file_path, 'r') as file:
    data = json.load(file)

# Now 'data' is a Python object (usually a dictionary or list)
content = data['chapter']['content']

output = []

for verse in content:
    output_data = {
        'chapter': chapter,
        'verse': verse['number'],
        'beginning': verse['content'][0]['text'],
        'ending': verse['content'][1]['text']
    }
    output.append(output_data)

with open(f'./output/{file_name}_out.json', 'w') as file:
    json.dump(output, file)
