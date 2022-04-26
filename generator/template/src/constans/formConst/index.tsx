// 定义高级表单

// 输入类型
const INPUT = 'INPUT'
const SELECT = 'SELECT'

// pleasholder
const P1 = '请输入'
const P2 = '请选择'

// options 选项值
const O1 = 'O1'
const O2 = 'O2'

export const form1 = [{
    key: 'name',
    lable: '姓名',
    method: INPUT,
    options: O1,
    pleasholder: P1
}, {
    key: 'address',
    lable: '地址',
    method: SELECT,
    options: O2,
    pleasholder: P2
}]