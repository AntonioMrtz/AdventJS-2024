function treeHeight(
  tree: { value: string; left: any; right: any } | null,
): number {
  if (tree === null) {
    return 0;
  }

  let rightHeight = treeHeight(tree.right);
  let leftHeight = treeHeight(tree.left);

  return 1 + Math.max(rightHeight, leftHeight);
}

// Tree definition
const tree = {
  value: "🎁",
  left: {
    value: "🎄",
    left: {
      value: "⭐",
      left: null,
      right: null,
    },
    right: {
      value: "🎅",
      left: null,
      right: null,
    },
  },
  right: {
    value: "❄️",
    left: null,
    right: {
      value: "🦌",
      left: null,
      right: null,
    },
  },
};

// Graphical representation of the tree:
//        🎁
//       /   \
//     🎄     ❄️
//    /  \      \
//  ⭐   🎅      🦌

// Function call
console.log(treeHeight(tree));
// Returns: 3
