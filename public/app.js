const app = Vue.createApp({
    data(){
        return {
            ID: '623020465-2',
            Name: 'นายชนม์สวัสดิ์ นาคนาม',
            subID: 'SC310006',
            subName: 'Mobile And Web Application',
            description: `
                จัดทำโดย รหัสนักศึกษา 623020465-2 นายชนม์สวัสดิ์ นาคนาม
                สาขาวิชา วิทยาการคอมพิวเตอร์
                วิทยาลัยการคอมพิวเตอร์ มหาวิทยาลัยขอนแก่น`
                .replace(/ +(?= )/g,''),
            picture: './img/chonsawat.png',
            items: [
                { message: 'LAB1', path: './content/work1/index.html' },
                { message: 'LAB2', path: './content/work2/index.html' }
            ]
        }
    },
    methods: {
        getSubjectIdAndName() {
            return this.subID + ' ' + this.subName
        }
    }
})

app.mount('#app')


