from typing import TypedDict


class Item(TypedDict):
    name: str
    quantity: int
    category: str


def organizeInventory(inventory: list[Item]) -> dict[str, dict[str, int]]:
    """Organize inventory

    :param list[Item] inventory: list of items
    :return dict[str, dict[str, int]]: organized items
    """
    organized_inventory = {}

    for item in inventory:
        if item["category"] not in organized_inventory:
            organized_inventory[item["category"]] = {}

        if item["name"] not in organized_inventory[item["category"]]:
            organized_inventory[item["category"]][item["name"]] = 0

        organized_inventory[item["category"]][item["name"]] += item["quantity"]

    return organized_inventory


inventary: list[Item] = [
    {"name": "doll", "quantity": 5, "category": "toys"},
    {"name": "car", "quantity": 3, "category": "toys"},
    {"name": "ball", "quantity": 2, "category": "sports"},
    {"name": "car", "quantity": 2, "category": "toys"},
    {"name": "racket", "quantity": 4, "category": "sports"},
]

print(organizeInventory(inventary))

inventary2: list[Item] = [
    {"name": "book", "quantity": 10, "category": "education"},
    {"name": "book", "quantity": 5, "category": "education"},
    {"name": "paint", "quantity": 3, "category": "art"},
]

print(organizeInventory(inventary2))
