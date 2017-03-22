/**
 * @param data 数据
 * @param left	左节点
 * @param right 右节点
 */
function Node(data, left, right) {
	this.data = data
	this.left = left
	this.right = right
	this.show = show
}

function show() {
	return this.data
}

//二叉查找树
function BST() {
	this.root = null
	this.insert = insert
	this.inOrder = inOrder
	this.getMin = getMin
	this.getMax = getMax
	this.find = find
	this.remove = remove
}

/**
 * @param  data 插入数据
 */
function insert(data) {
	var n = new Node(data, null, null)
	if (this.root == null) {
		this.root = n
	} else {
		var current = this.root
		var parent
		while (true) {
			parent = current
			if (data < current.data) {
				current = current.left
				if (current == null) {
					parent.left = n
					break
				}
			} else {
				current = current.right
				if (current == null) {
					parent.right = n
					break
				}
			}
		}
	}
}


/**
 * 中序遍历
 * node  二叉查找树的根节点
 */
function inOrder(node) {
	if (!(node == null)) {
		inOrder(node.left)
		console.log(node.show() + ' ')
		inOrder(node.right)
	}
}

/**
 * 先序遍历
 * node  二叉查找树的根节点
 */
function preOrder(node) {
	if (!(node == null)) {
		console.log(node.show() + ' ')
		preOrder(node.left)
		preOrder(node.right)
	}
}

/**
 * 后序遍历
 * node  二叉查找树的根节点
 */
function postOrder(node) {
	if (!(node == null)) {
		postOrder(node.left)
		postOrder(node.right)
		console.log(node.show() + ' ')
	}
}

/**
 * 查找最小值
 * @return 最小值
 */
function getMin() {
	var current = this.root
	while (!(current.left == null)) {
		current = current.left
	}

	return current.data
}

/**
 * 查找最大值
 * @return 最大值
 */
function getMax() {
	var current = this.root
	while (!(current.right == null)) {
		current = current.right
	}
	return current.data
}

/**
 * 查找给定值
 * @param data 要查找的数据
 * @return 如果data存在，返回该节点，如果没有找到，返回null
 */
function find(data) {
	var current = this.root
	while (current != null) {
		if (current.data == data) {
			return current
		} else if (data < current.data) {
			current = current.left
		} else {
			current = current.right
		}
	}
	return null
}

// 删除节点
function remove(data) {
	root = removeNode(this.root, data)
}

function removeNode(node, data) {
	if (node == null) {
		return null;
	}
	if (data == node.data) {
		// 没有子节点
		if (node.left == null && nude.right == null) {
			return null;
		}
		// 没有左子节点
		if (node.left == null) {
			return right;
		}
		// 没有右子节点
		if (node.right == null) {
			return node.left
		}
		// 有两个子节点的节点
		var tempNode = getMin(node, right);
		node.data = temNode.data;
		node.right = removeNode(node.right, tempNode.data)
		return node;
	} else if (data < node.data) {
		node.left = removeNode(node.left, data);
		return node
	} else {
		node.right = removeNode(node.right, data)
		return node
	}
}

// 
var nums = new BST()
nums.insert(23)
nums.insert(45)
nums.insert(16)
nums.insert(37)
nums.insert(3)
nums.insert(99)
nums.insert(22)



//