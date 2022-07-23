# POKEDEX_API

A simple API for training purpose running on nodeJS and express.

Here are the endpoints:

- `/pokedex` returns you everything
- `/pokedex/id/:id` gets you the pokemon associate to that id
- `/pokedex/filter/` lets you put some querystrings.

For exemple:

```
.../pokedex/filter/?base/HP=45&type=Grass

```

Returns

```json
[
  {
    "id": 152,
    "name": {
      "english": "Chikorita",
      "japanese": "チコリータ",
      "chinese": "菊草叶",
      "french": "Germignon"
    },
    "type": ["Grass"],
    "base": {
      "HP": 45,
      "Attack": 49,
      "Defense": 65,
      "Sp. Attack": 49,
      "Sp. Defense": 65,
      "Speed": 45
    }
  },
  {
    "id": 420,
    "name": {
      "english": "Cherubi",
      "japanese": "チェリンボ",
      "chinese": "樱花宝",
      "french": "Ceribou"
    },
    "type": ["Grass"],
    "base": {
      "HP": 45,
      "Attack": 35,
      "Defense": 45,
      "Sp. Attack": 62,
      "Sp. Defense": 53,
      "Speed": 35
    }
  },
  {
    "id": 495,
    "name": {
      "english": "Snivy",
      "japanese": "ツタージャ",
      "chinese": "藤藤蛇",
      "french": "Vipélierre"
    },
    "type": ["Grass"],
    "base": {
      "HP": 45,
      "Attack": 45,
      "Defense": 55,
      "Sp. Attack": 45,
      "Sp. Defense": 55,
      "Speed": 63
    }
  },
  {
    "id": 548,
    "name": {
      "english": "Petilil",
      "japanese": "チュリネ",
      "chinese": "百合根娃娃",
      "french": "Chlorobule"
    },
    "type": ["Grass"],
    "base": {
      "HP": 45,
      "Attack": 35,
      "Defense": 50,
      "Sp. Attack": 70,
      "Sp. Defense": 50,
      "Speed": 30
    }
  }
]
```

Work still need to be done to verify the query string and so on.  
May be I'll scale it also later on with some images and associated attacks etc...