function isTreesSynchronized(
  tree1: { value: string; left?: any; right?: any } | undefined,
  tree2: { value: string; left?: any; right?: any } | undefined,
): [boolean, string] {
  if (!tree1 || !tree2) return [false, ""];

  const firstTreeRoot = tree1.value;
  const secondTreeRoot = tree2.value;
  let isMirror = false;

  if (firstTreeRoot !== secondTreeRoot) return [false, firstTreeRoot];

  const validateNodeIsMirror = (
    firstTreeNode: any,
    secondTreeNode: any,
  ): boolean => {
    if (!firstTreeNode && !secondTreeNode) return true;
    if (!firstTreeNode || !secondTreeNode) return false;
    if (firstTreeNode.value !== secondTreeNode.value) return false;

    return (
      validateNodeIsMirror(firstTreeNode.left, secondTreeNode.right) &&
      validateNodeIsMirror(firstTreeNode.right, secondTreeNode.left)
    );
  };

  isMirror =
    validateNodeIsMirror(tree1.left, tree2.right) &&
    validateNodeIsMirror(tree1.right, tree2.left);

  return [isMirror, firstTreeRoot];
}

const tree1 = {
  value: "🎄",
  left: { value: "⭐" },
  right: { value: "🎅" },
};

const tree2 = {
  value: "🎄",
  left: { value: "🎅" },
  right: { value: "⭐" },
};

console.log(isTreesSynchronized(tree1, tree2)); // [true, '🎄']

/*
  tree1          tree2
   🎄              🎄
  / \             / \
⭐   🎅         🎅   ⭐
*/

const tree3 = {
  value: "🎄",
  left: { value: "🎅" },
  right: { value: "🎁" },
};

console.log(isTreesSynchronized(tree1, tree3)); // [false, '🎄']

const tree4 = {
  value: "🎄",
  left: { value: "⭐" },
  right: { value: "🎅" },
};

console.log(isTreesSynchronized(tree1, tree4)); // [false, '🎄']

console.log(isTreesSynchronized({ value: "🎅" }, { value: "🧑‍🎄" })); // [false, '🎅']
