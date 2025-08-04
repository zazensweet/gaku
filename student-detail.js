const mockStudents = [
    {
        uryuId: 'abc123',
        studentId: '12345678',
        name: '山田 太郎',
        kanaName: 'ヤマダ タロウ',
        englishName: 'Taro Yamada',
        faculty: 'economics',
        department: '経済学科',
        status: 'enrolled',
        enrollmentDate: '2021-04-01',
        postalCode: '150-0002',
        prefecture: '東京都',
        city: '渋谷区渋谷三丁目',
        address1: '21番3号',
        address2: '渋谷ストリーム304号室',
        phone: '080-8888-8888',
        email: 't-yamada@uryu.ac.jp',
        contact: {
            uryuId: 'con123',
            name: '山田 花子',
            kanaName: 'ヤマダ ハナコ',
            englishName: 'Hanako Yamada',
            relationship: '母',
            postalCode: '150-0002',
            prefecture: '東京都',
            city: '渋谷区渋谷三丁目',
            address1: '21番3号',
            address2: '渋谷ストリーム304号室',
            phone: '080-8888-8889',
            email: 'h-yamada@example.com'
        },
        statusHistory: [
            {
                type: '入学',
                status: '適用済み',
                applicationDate: '2021-02-15',
                approvalDate: '2021-02-28',
                effectiveDate: '2021-04-01'
            },
            {
                type: '進級',
                status: '適用済み',
                applicationDate: '2022-03-01',
                approvalDate: '2022-03-15',
                effectiveDate: '2022-04-01'
            },
            {
                type: '進級',
                status: '適用済み',
                applicationDate: '2023-03-01',
                approvalDate: '2023-03-15',
                effectiveDate: '2023-04-01'
            }
        ]
    },
    {
        uryuId: 'def456',
        studentId: '23456789',
        name: '佐藤 花子',
        kanaName: 'サトウ ハナコ',
        englishName: 'Hanako Sato',
        faculty: 'law',
        department: '法律学科',
        status: 'enrolled',
        enrollmentDate: '2022-04-01',
        postalCode: '160-0022',
        prefecture: '東京都',
        city: '新宿区新宿',
        address1: '1-1-1',
        address2: '新宿ビル501',
        phone: '090-1111-2222',
        email: 'h-sato@uryu.ac.jp',
        contact: {
            uryuId: 'con456',
            name: '佐藤 一郎',
            kanaName: 'サトウ イチロウ',
            englishName: 'Ichiro Sato',
            relationship: '父',
            postalCode: '160-0022',
            prefecture: '東京都',
            city: '新宿区新宿',
            address1: '1-1-1',
            address2: '新宿ビル501',
            phone: '090-1111-3333',
            email: 'i-sato@example.com'
        },
        statusHistory: [
            {
                type: '入学',
                status: '適用済み',
                applicationDate: '2022-02-20',
                approvalDate: '2022-03-05',
                effectiveDate: '2022-04-01'
            },
            {
                type: '進級',
                status: '適用済み',
                applicationDate: '2023-03-01',
                approvalDate: '2023-03-15',
                effectiveDate: '2023-04-01'
            }
        ]
    },
    {
        uryuId: 'ghi789',
        studentId: '34567890',
        name: '鈴木 一郎',
        kanaName: 'スズキ イチロウ',
        englishName: 'Ichiro Suzuki',
        faculty: 'engineering',
        department: '機械工学科',
        status: 'leave',
        enrollmentDate: '2020-04-01',
        postalCode: '141-0031',
        prefecture: '東京都',
        city: '品川区西五反田',
        address1: '2-11-8',
        address2: '',
        phone: '080-3333-4444',
        email: 'i-suzuki@uryu.ac.jp',
        contact: {
            uryuId: 'con789',
            name: '鈴木 美子',
            kanaName: 'スズキ ヨシコ',
            englishName: 'Yoshiko Suzuki',
            relationship: '母',
            postalCode: '141-0031',
            prefecture: '東京都',
            city: '品川区西五反田',
            address1: '2-11-8',
            address2: '',
            phone: '080-3333-5555',
            email: 'y-suzuki@example.com'
        },
        statusHistory: [
            {
                type: '入学',
                status: '適用済み',
                applicationDate: '2020-02-10',
                approvalDate: '2020-02-25',
                effectiveDate: '2020-04-01'
            },
            {
                type: '進級',
                status: '適用済み',
                applicationDate: '2021-03-01',
                approvalDate: '2021-03-15',
                effectiveDate: '2021-04-01'
            },
            {
                type: '進級',
                status: '適用済み',
                applicationDate: '2022-03-01',
                approvalDate: '2022-03-15',
                effectiveDate: '2022-04-01'
            },
            {
                type: '休学',
                status: '適用済み',
                applicationDate: '2023-09-01',
                approvalDate: '2023-09-15',
                effectiveDate: '2023-10-01'
            }
        ]
    },
    {
        uryuId: 'jkl012',
        studentId: '45678901',
        name: '田中 美咲',
        kanaName: 'タナカ ミサキ',
        englishName: 'Misaki Tanaka',
        faculty: 'literature',
        department: '日本文学科',
        status: 'enrolled',
        enrollmentDate: '2023-04-01',
        postalCode: '113-0033',
        prefecture: '東京都',
        city: '文京区本郷',
        address1: '7-3-1',
        address2: '',
        phone: '090-5555-6666',
        email: 'm-tanaka@uryu.ac.jp',
        contact: {
            uryuId: 'con012',
            name: '田中 太郎',
            kanaName: 'タナカ タロウ',
            englishName: 'Taro Tanaka',
            relationship: '父',
            postalCode: '113-0033',
            prefecture: '東京都',
            city: '文京区本郷',
            address1: '7-3-1',
            address2: '',
            phone: '090-5555-7777',
            email: 't-tanaka@example.com'
        },
        statusHistory: [
            {
                type: '入学',
                status: '適用済み',
                applicationDate: '2023-02-18',
                approvalDate: '2023-03-03',
                effectiveDate: '2023-04-01'
            }
        ]
    },
    {
        uryuId: 'mno345',
        studentId: '56789012',
        name: '高橋 健太',
        kanaName: 'タカハシ ケンタ',
        englishName: 'Kenta Takahashi',
        faculty: 'science',
        department: '物理学科',
        status: 'graduated',
        enrollmentDate: '2019-04-01',
        postalCode: '152-0035',
        prefecture: '東京都',
        city: '目黒区自由が丘',
        address1: '1-29-1',
        address2: 'フリーダムハイツ202',
        phone: '080-7777-8888',
        email: 'k-takahashi@uryu.ac.jp',
        contact: {
            uryuId: 'con345',
            name: '高橋 明美',
            kanaName: 'タカハシ アケミ',
            englishName: 'Akemi Takahashi',
            relationship: '母',
            postalCode: '152-0035',
            prefecture: '東京都',
            city: '目黒区自由が丘',
            address1: '1-29-1',
            address2: 'フリーダムハイツ202',
            phone: '080-7777-9999',
            email: 'a-takahashi@example.com'
        },
        statusHistory: [
            {
                type: '入学',
                status: '適用済み',
                applicationDate: '2019-02-12',
                approvalDate: '2019-02-27',
                effectiveDate: '2019-04-01'
            },
            {
                type: '進級',
                status: '適用済み',
                applicationDate: '2020-03-01',
                approvalDate: '2020-03-15',
                effectiveDate: '2020-04-01'
            },
            {
                type: '進級',
                status: '適用済み',
                applicationDate: '2021-03-01',
                approvalDate: '2021-03-15',
                effectiveDate: '2021-04-01'
            },
            {
                type: '進級',
                status: '適用済み',
                applicationDate: '2022-03-01',
                approvalDate: '2022-03-15',
                effectiveDate: '2022-04-01'
            },
            {
                type: '卒業',
                status: '適用済み',
                applicationDate: '2023-02-01',
                approvalDate: '2023-02-28',
                effectiveDate: '2023-03-25'
            }
        ]
    },
    {
        uryuId: 'pqr678',
        studentId: '67890123',
        name: '伊藤 真由美',
        kanaName: 'イトウ マユミ',
        englishName: 'Mayumi Ito',
        faculty: 'economics',
        department: '経営学科',
        status: 'enrolled',
        enrollmentDate: '2021-04-01',
        postalCode: '171-0022',
        prefecture: '東京都',
        city: '豊島区南池袋',
        address1: '2-41-5',
        address2: '',
        phone: '090-9999-0000',
        email: 'm-ito@uryu.ac.jp',
        contact: {
            uryuId: 'con678',
            name: '伊藤 健一',
            kanaName: 'イトウ ケンイチ',
            englishName: 'Kenichi Ito',
            relationship: '父',
            postalCode: '171-0022',
            prefecture: '東京都',
            city: '豊島区南池袋',
            address1: '2-41-5',
            address2: '',
            phone: '090-9999-1111',
            email: 'k-ito@example.com'
        },
        statusHistory: [
            {
                type: '入学',
                status: '適用済み',
                applicationDate: '2021-02-14',
                approvalDate: '2021-02-28',
                effectiveDate: '2021-04-01'
            },
            {
                type: '進級',
                status: '適用済み',
                applicationDate: '2022-03-01',
                approvalDate: '2022-03-15',
                effectiveDate: '2022-04-01'
            },
            {
                type: '進級',
                status: '適用済み',
                applicationDate: '2023-03-01',
                approvalDate: '2023-03-15',
                effectiveDate: '2023-04-01'
            }
        ]
    },
    {
        uryuId: 'stu901',
        studentId: '78901234',
        name: '渡辺 翔太',
        kanaName: 'ワタナベ ショウタ',
        englishName: 'Shota Watanabe',
        faculty: 'law',
        department: '政治学科',
        status: 'withdrawn',
        enrollmentDate: '2020-04-01',
        postalCode: '169-0074',
        prefecture: '東京都',
        city: '新宿区北新宿',
        address1: '3-20-2',
        address2: '北新宿タワー1105',
        phone: '080-1234-5678',
        email: 's-watanabe@uryu.ac.jp',
        contact: {
            uryuId: 'con901',
            name: '渡辺 洋子',
            kanaName: 'ワタナベ ヨウコ',
            englishName: 'Yoko Watanabe',
            relationship: '母',
            postalCode: '169-0074',
            prefecture: '東京都',
            city: '新宿区北新宿',
            address1: '3-20-2',
            address2: '北新宿タワー1105',
            phone: '080-1234-6789',
            email: 'y-watanabe@example.com'
        },
        statusHistory: [
            {
                type: '入学',
                status: '適用済み',
                applicationDate: '2020-02-11',
                approvalDate: '2020-02-26',
                effectiveDate: '2020-04-01'
            },
            {
                type: '進級',
                status: '適用済み',
                applicationDate: '2021-03-01',
                approvalDate: '2021-03-15',
                effectiveDate: '2021-04-01'
            },
            {
                type: '退学',
                status: '適用済み',
                applicationDate: '2022-01-15',
                approvalDate: '2022-01-31',
                effectiveDate: '2022-02-01'
            }
        ]
    },
    {
        uryuId: 'vwx234',
        studentId: '89012345',
        name: '中村 愛',
        kanaName: 'ナカムラ アイ',
        englishName: 'Ai Nakamura',
        faculty: 'literature',
        department: '英文学科',
        status: 'enrolled',
        enrollmentDate: '2022-04-01',
        postalCode: '158-0094',
        prefecture: '東京都',
        city: '世田谷区玉川',
        address1: '1-15-6',
        address2: '',
        phone: '090-2468-1357',
        email: 'a-nakamura@uryu.ac.jp',
        contact: {
            uryuId: 'con234',
            name: '中村 正夫',
            kanaName: 'ナカムラ マサオ',
            englishName: 'Masao Nakamura',
            relationship: '父',
            postalCode: '158-0094',
            prefecture: '東京都',
            city: '世田谷区玉川',
            address1: '1-15-6',
            address2: '',
            phone: '090-2468-2468',
            email: 'm-nakamura@example.com'
        },
        statusHistory: [
            {
                type: '入学',
                status: '適用済み',
                applicationDate: '2022-02-19',
                approvalDate: '2022-03-04',
                effectiveDate: '2022-04-01'
            },
            {
                type: '進級',
                status: '適用済み',
                applicationDate: '2023-03-01',
                approvalDate: '2023-03-15',
                effectiveDate: '2023-04-01'
            }
        ]
    },
    {
        uryuId: 'yz567',
        studentId: '90123456',
        name: '小林 大輔',
        kanaName: 'コバヤシ ダイスケ',
        englishName: 'Daisuke Kobayashi',
        faculty: 'engineering',
        department: '電気工学科',
        status: 'enrolled',
        enrollmentDate: '2023-04-01',
        postalCode: '144-0052',
        prefecture: '東京都',
        city: '大田区蒲田',
        address1: '5-13-14',
        address2: '蒲田マンション803',
        phone: '080-3690-2580',
        email: 'd-kobayashi@uryu.ac.jp',
        contact: {
            uryuId: 'con567',
            name: '小林 恵子',
            kanaName: 'コバヤシ ケイコ',
            englishName: 'Keiko Kobayashi',
            relationship: '母',
            postalCode: '144-0052',
            prefecture: '東京都',
            city: '大田区蒲田',
            address1: '5-13-14',
            address2: '蒲田マンション803',
            phone: '080-3690-3690',
            email: 'k-kobayashi@example.com'
        },
        statusHistory: [
            {
                type: '入学',
                status: '適用済み',
                applicationDate: '2023-02-17',
                approvalDate: '2023-03-02',
                effectiveDate: '2023-04-01'
            }
        ]
    },
    {
        uryuId: 'abc890',
        studentId: '01234567',
        name: '加藤 美穂',
        kanaName: 'カトウ ミホ',
        englishName: 'Miho Kato',
        faculty: 'science',
        department: '化学科',
        status: 'leave',
        enrollmentDate: '2021-04-01',
        postalCode: '135-0061',
        prefecture: '東京都',
        city: '江東区豊洲',
        address1: '3-2-20',
        address2: '豊洲フロント1201',
        phone: '090-7531-8642',
        email: 'm-kato@uryu.ac.jp',
        contact: {
            uryuId: 'con890',
            name: '加藤 義夫',
            kanaName: 'カトウ ヨシオ',
            englishName: 'Yoshio Kato',
            relationship: '父',
            postalCode: '135-0061',
            prefecture: '東京都',
            city: '江東区豊洲',
            address1: '3-2-20',
            address2: '豊洲フロント1201',
            phone: '090-7531-7531',
            email: 'y-kato@example.com'
        },
        statusHistory: [
            {
                type: '入学',
                status: '適用済み',
                applicationDate: '2021-02-13',
                approvalDate: '2021-02-27',
                effectiveDate: '2021-04-01'
            },
            {
                type: '進級',
                status: '適用済み',
                applicationDate: '2022-03-01',
                approvalDate: '2022-03-15',
                effectiveDate: '2022-04-01'
            },
            {
                type: '休学',
                status: '適用予定',
                applicationDate: '2025-02-01',
                approvalDate: '2025-02-28',
                effectiveDate: '2025-04-01'
            }
        ]
    }
];

const facultyNames = {
    economics: '経済学部',
    law: '法学部',
    literature: '文学部',
    science: '理学部',
    engineering: '工学部'
};

const statusNames = {
    enrolled: '在学',
    leave: '休学',
    returned: '復学',
    graduated: '卒業',
    withdrawn: '退学',
    expelled: '除籍'
};

document.addEventListener('DOMContentLoaded', () => {
    const studentId = localStorage.getItem('selectedStudentId');
    if (!studentId) {
        alert('学生が選択されていません');
        window.location.href = 'index.html';
        return;
    }
    
    loadStudentDetails(studentId);
});

function loadStudentDetails(uryuId) {
    const student = mockStudents.find(s => s.uryuId === uryuId);
    
    if (!student) {
        alert('学生データが見つかりません');
        window.location.href = 'index.html';
        return;
    }
    
    document.getElementById('uryuId').textContent = student.uryuId;
    document.getElementById('studentId').textContent = student.studentId;
    document.getElementById('name').textContent = student.name;
    document.getElementById('kanaName').textContent = student.kanaName;
    document.getElementById('englishName').textContent = student.englishName;
    document.getElementById('enrollmentDate').textContent = formatDate(student.enrollmentDate);
    document.getElementById('affiliation').textContent = `${facultyNames[student.faculty]} ${student.department}`;
    
    const statusElement = document.getElementById('status');
    statusElement.innerHTML = `<span class="status-badge status-${student.status}">${statusNames[student.status]}</span>`;
    
    document.getElementById('postalCode').textContent = student.postalCode;
    document.getElementById('prefecture').textContent = student.prefecture;
    document.getElementById('city').textContent = student.city;
    document.getElementById('address1').textContent = student.address1;
    document.getElementById('address2').textContent = student.address2 || '-';
    document.getElementById('phone').textContent = student.phone;
    document.getElementById('email').textContent = student.email;
    
    if (student.contact) {
        document.getElementById('contactUryuId').textContent = student.contact.uryuId;
        document.getElementById('contactName').textContent = student.contact.name;
        document.getElementById('contactKanaName').textContent = student.contact.kanaName;
        document.getElementById('contactEnglishName').textContent = student.contact.englishName;
        document.getElementById('relationship').textContent = student.contact.relationship;
        document.getElementById('contactPostalCode').textContent = student.contact.postalCode;
        document.getElementById('contactPrefecture').textContent = student.contact.prefecture;
        document.getElementById('contactCity').textContent = student.contact.city;
        document.getElementById('contactAddress1').textContent = student.contact.address1;
        document.getElementById('contactAddress2').textContent = student.contact.address2 || '-';
        document.getElementById('contactPhone').textContent = student.contact.phone;
        document.getElementById('contactEmail').textContent = student.contact.email;
    }
    
    loadStatusHistory(student.statusHistory);
}

function loadStatusHistory(history) {
    const tbody = document.getElementById('historyBody');
    
    if (!history || history.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align: center; color: var(--text-secondary); padding: 1rem;">履歴データがありません</td></tr>';
        return;
    }
    
    tbody.innerHTML = history.map(record => {
        const statusBadge = record.status === '適用済み' 
            ? '<span class="status-badge" style="background-color: #dcfce7; color: #166534;">適用済み</span>'
            : '<span class="status-badge" style="background-color: #fef3c7; color: #92400e;">適用予定</span>';
        
        return `
            <tr>
                <td>${record.type}</td>
                <td>${statusBadge}</td>
                <td>${formatDate(record.applicationDate)}</td>
                <td>${formatDate(record.approvalDate)}</td>
                <td>${formatDate(record.effectiveDate)}</td>
            </tr>
        `;
    }).join('');
}

function formatDate(dateString) {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
}