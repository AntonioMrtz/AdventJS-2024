def create_xmas_tree(height: int, ornament: str) -> str:
    """Create xmas tree with certain height and ornament

    Args:
        height (int): tree height
        ornament (str): the ornament character

    Returns:
        str: resulting tree with its turnk
    """
    EMPTY_CHARACTER = "_"
    TRUNK_CHARACTER = "#"
    max_width = (height * 2) - 1
    tree = ""

    def add_trunk(tree: str, max_tree_width: int) -> str:
        partial_empty_characters = (max_width - 1) / 2
        empty_characters = EMPTY_CHARACTER * int(partial_empty_characters)
        trunk = (
            empty_characters
            + TRUNK_CHARACTER
            + empty_characters
            + "\n"
            + empty_characters
            + TRUNK_CHARACTER
            + empty_characters
        )

        return tree + trunk

    for i in range(1, height + 1):
        asterisk_width = (i * 2) - 1
        asterisk_characters = ornament * asterisk_width
        partial_empty_characters = (max_width - asterisk_width) / 2
        empty_characters = EMPTY_CHARACTER * int(partial_empty_characters)

        tree += empty_characters + asterisk_characters + empty_characters + "\n"

    tree = add_trunk(tree, max_width)

    return tree


tree = create_xmas_tree(5, "*")
print(tree)
# Output:
# ____*____
# ___***___
# __*****__
# _*******_
# *********
# ____#____
# ____#____

tree2 = create_xmas_tree(3, "+")
print(tree2)
# Output:
# __+__
# _+++_
# +++++
# __#__
# __#__

tree3 = create_xmas_tree(6, "@")
print(tree3)
# Output:
# _____@_____
# ____@@@____
# ___@@@@@___
# __@@@@@@@__
# _@@@@@@@@@_
# @@@@@@@@@@@
# _____#_____
# _____#_____
