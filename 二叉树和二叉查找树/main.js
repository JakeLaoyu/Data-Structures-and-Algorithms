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
}

/**
 * @param  data 插入数据
 */
function insert(data) {
	var n = New Node(data, null, null)
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


// 中序遍历
function inOrder(node) {
	if (!(node == null)) {
		inOrder(node.left)
		console.log(node.show() + ' ')
		inOrder(node.right)
	}
}