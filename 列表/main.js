/**
 * listSize(属性) 列表元素的个数
 * pos(属性) 列表的当前位置
 * length(方法) 返回列表中元素的个数
 * clear(方法) 清空列表中的所有元素
 * toString(方法) 返回列表的字符串形式
 * getElement(方法) 返回当前位置的元素
 * insert(方法) 在现有元素后插入新元素
 * append(方法) 在列表的末尾添加先元素
 * remove(方法) 从列表中删除元素
 * front(方法) 将列表的当前位置移动到第一个元素
 * end(方法) 将列表的当前位置移动到最后一个元素
 * prev(方法) 将当前位置后移一位
 * next(方法) 将当前位置前移一位
 * hasNext(方法) 判断后一位
 * hasPrev(方法) 判断前一位
 * currPos(方法) 返回列表的当前位置
 * moveTo(方法) 将当前位置移动到指定位置
 */


function List() {
	this.listSize = 0
	this.pos = 0
	this.dataStore = [] //初始化一个空数组来保存列表元素
	this.clear = clear
	this.find = find
	this.toString = toString
	this.insert = insert
	this.append = append
	this.remove = remove
	this.front = front
	this.end = end
	this.prev = prev
	this.next = next
	this.hasNext
	this.hasPrev
	this.length = length
	this.currPos = currPos
	this.moveTo = moveTo
	this.getElement = getElement
	this.contains = contains
}

/**
 * @param  添加元素
 * @return {[type]}
 */
function append(element) {
	this.dataStore[this.listSize++] = element
}

/**
 * @param  查找元素
 * @return 存在返回该元素位置，不存在返回 -1
 */
function find(element) {
	for (let i = 0; i < this.dataStore.length; i++) {
		if (this.dataStore[i] == element) {
			return i
		}
	}
	return -1
}

/**
 * @param  删除元素
 * @return 成功返回true，失败返回false
 */
function remove(element) {
	var foundAt = this.find(element)
	if (foundAt > -1) {
		this.dataStore.splice(foundAt, 1)
			--this.listSize
		return true
	}
	return false
}

/**
 * @return 返回元素长度
 */
function length() {
	return this.listSize
}

/**
 * @return 返回列表中的元素
 */
function toString() {
	return this.dataStore
}

/**
 * @param  插入一个元素
 * @param  element 要插入的元素
 * @param  after 在after之后添加
 * @return true or false
 */
function insert(element, after) {
	var insertPos = this.find(after)
	if (insertPos > -1) {
		this.dataStore.splice(insertPos + 1, 0, element)
			++this.listSize
		return true
	}
	return false
}

/**
 * @return 清空列表
 */
function clear() {
	delete this.dataStore
	this.dataStore.length = 0
	this.listSize = this.pos = 0
}

/**
 * @param  判断给定元素是否在列表中
 * @return true or false
 */
function contains(element) {
	for (let i = 0; i < this.dataStore.length; i++) {
		if (this.dataStore[i] == element) {
			return true
		}
		return false
	}
}

function front() {
	this.pos = 0
}

function end() {
	this.pos = this.listSize - 1
}

function prev() {
	--this.pos
}

function next() {
	if (this.pos < this.listSize) {
		++this.pos
	}
}

function currPos() {
	return this.pos
}

function moveTo(position) {
	this.pos = position
}

function getElement() {
	return this.dataStore[this.pos]
}

function hasNext() {
	return this.dataStore[this.pos]
}

function hasPrev() {
	return this.pos >= 0
}


// 测试功能
var names = new List()
names.append('Clayton')
names.append('Jake')
names.append('Raymond')
names.append('Cynthia')
names.append('Bryan')

// 移动到列表的第一个元素，并打印
names.front()
console.log(names.getElement())

// 向前移动一个单位，并显示
names.next()
console.log(names.getElement())

// 现向前移动两次，然后向后移动一次，打印当前元素
names.next()
names.next()
names.prev()
console.log(names.getElement())