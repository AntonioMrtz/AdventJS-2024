def in_box(box: list[str]) -> bool:
    """Check if the present is inside the box

    Args:
        box (list[str]): box structure

    Returns:
        bool: the present is inside the box
    """
    if not box:
        return False

    total_lines = len(box)
    line_width = len(box[0])

    for j in range(0, total_lines):
        for i in range(0, line_width):
            if box[j][i] != "*":
                continue

            try:
                if box[j][i - 1] and box[j][i + 1] and box[j - 1][i] and box[j + 1][i]:
                    return True
            except IndexError:
                return False
    return False


print(in_box(["###", "#*#", "###"]))  # ➞ True

print(in_box(["####", "#* #", "#  #", "####"]))  # ➞ True

print(in_box(["#####", "#   #", "#  #*", "#####"]))  # ➞ False

print(in_box(["#####", "#   #", "#   #", "#   #", "#####"]))  # ➞ False
