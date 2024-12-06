from typing import TypedDict


class Shoe(TypedDict):
    """Model for Shoe"""

    type: str
    size: int


def organize_shoes(shoes: list[Shoe]) -> list[int]:
    """Get paired shoes

    Args:
        shoes (list[Shoe]): list of shoes

    Raises:
        ValueError: invalid shoe parameters

    Returns:
        list[int]: list of paired shoes
    """
    left_shoes: dict[int, int] = {}
    right_shoes: dict[int, int] = {}
    paired_shoes: list[int] = []

    shoe_storage_mapping: dict[str, dict[int, int]] = {"I": left_shoes, "R": right_shoes}
    opposite_shoe_storage_mapping: dict[str, dict[int, int]] = {
        "I": right_shoes,
        "R": left_shoes,
    }

    for shoe in shoes:
        shoe_type = shoe["type"]
        shoe_size = shoe["size"]
        shoe_storage = shoe_storage_mapping.get(shoe_type)
        opposite_shoe_storage = opposite_shoe_storage_mapping.get(shoe_type)

        if shoe_storage is None or opposite_shoe_storage is None:
            raise ValueError("Invalid shoe foot")  # noqa: TRY003

        if shoe_size in opposite_shoe_storage and opposite_shoe_storage[shoe_size] > 0:
            opposite_shoe_storage[shoe_size] -= 1
            paired_shoes.append(shoe_size)
        elif shoe_size not in shoe_storage:
            shoe_storage[shoe_size] = 1
        else:
            shoe_storage[shoe_size] += 1

    return paired_shoes


shoes: list[Shoe] = [
    {"type": "I", "size": 38},
    {"type": "R", "size": 38},
    {"type": "R", "size": 42},
    {"type": "I", "size": 41},
    {"type": "I", "size": 42},
]
print(organize_shoes(shoes))

shoes2: list[Shoe] = [
    {"type": "I", "size": 38},
    {"type": "R", "size": 38},
    {"type": "I", "size": 38},
    {"type": "I", "size": 38},
    {"type": "R", "size": 38},
]
print(organize_shoes(shoes2))

shoes3: list[Shoe] = [
    {"type": "I", "size": 38},
    {"type": "R", "size": 36},
    {"type": "R", "size": 42},
    {"type": "I", "size": 41},
    {"type": "I", "size": 43},
]
print(organize_shoes(shoes3))
