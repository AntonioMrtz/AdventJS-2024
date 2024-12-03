def createFrame(names: list[str]) -> str:
    """Create frame for names

    :param list[str] names: names
    :return str: the frame containg names
    """
    longest_name = len(max(names, key=len))
    box_width = longest_name + 4

    frame_borders = f"{'*'*box_width}"
    frame = f"{frame_borders}\n"

    for name in names:
        frame += f"* {name}{' '*(longest_name-len(name))} *\n"

    frame += frame_borders
    return frame


print(createFrame(["a", "bb", "ccc"]))
