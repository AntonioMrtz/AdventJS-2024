def prepare_gifts(gifts: list[int]) -> list[int]:
    """Return a new list without duplicates and sorted in ascending order

    Args:
        gifts (list[int]): list of gits

    Returns:
        list[int]: the list without duplicates and sorted in ascending order
    """
    unique_sorted_gifts = list(set(gifts))
    unique_sorted_gifts.sort()
    print(f"unique_list: {unique_sorted_gifts} from - {gifts}")

    return unique_sorted_gifts


gifts1 = [3, 1, 2, 3, 4, 2, 5]
preparedGifts1 = prepare_gifts(gifts1)
assert preparedGifts1 == [1, 2, 3, 4, 5]

gifts2 = [6, 5, 5, 5, 5]
preparedGifts2 = prepare_gifts(gifts2)
assert preparedGifts2 == [5, 6]

gifts3 = []
preparedGifts3 = prepare_gifts(gifts3)
assert preparedGifts3 == []
