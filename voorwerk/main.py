import json

with open("./voorwerk/materieeldiensten.json", "r") as jsonfile: 
    data = json.load(jsonfile)

diensten = []

def getBeginAndEnd(task):
    match task['taakType']:
        case 'MATERIEELCLAIM':
            return (task['dienstRegelPunt'], task['dienstRegelPunt'])
        case 'TRAJECTCLAIM_MET_CLAIMSOORTCODE':
            return (task['vertrekDienstRegelPunt'], task['aankomstDienstRegelPunt'])
        case 'MATERIEELTRAJECT':
            return (task['vertrek']['dienstRegelPunt'], task['aankomst']['dienstRegelPunt'])
        case 'TRAJECTCLAIM_MET_BEWEGINGSCODE':
            return (task['vertrekDienstRegelPunt'], task['aankomstDienstRegelPunt'])
    raise Exception(f'{task}')

for dienst in data:
    if not dienst['inzetten']:
        continue
    first = None
    last = None
    first = getBeginAndEnd(dienst['inzetten'][0]['materieelTaak'])[0]
    last = getBeginAndEnd(dienst['inzetten'][-1]['materieelTaak'])[1]
    
    if first and last:
        diensten.append((first, last))

print('['+ ', '.join(map(lambda x: "{" + f'"vertrek": "{x[0]}", "aankomst": "{x[1]}"' + "}", diensten)) + ']')