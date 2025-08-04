/**
 * 学生管理システム - メインアプリケーション
 * オブジェクト指向UIに基づく設計
 */

// ===== データモデル =====
const STUDENT_DATA = [
    {
        id: 'STU001',
        studentId: '2021001001',
        name: '山田 太郎',
        kana: 'ヤマダ タロウ',
        english: 'Taro Yamada',
        birthDate: '2003-04-15',
        gender: '男性',
        nationality: '日本',
        faculty: 'economics',
        department: '経済学科',
        grade: 3,
        enrollmentYear: 2021,
        enrollmentType: '一般入試',
        status: '在学',
        address: '〒150-0002 東京都渋谷区渋谷3-21-3 渋谷ストリーム304',
        phone: '080-1234-5678',
        email: 't.yamada@university.ac.jp',
        lastUpdate: '2024-03-15',
        emergencyContacts: [
            {
                name: '山田 花子',
                relationship: '母親',
                phone: '080-1234-5679',
                email: 'h.yamada@example.com'
            }
        ],
        history: [
            {
                date: '2021-04-01',
                type: '入学',
                details: '経済学部経済学科 一般入試により入学'
            },
            {
                date: '2022-04-01',
                type: '進級',
                details: '2年次への進級'
            },
            {
                date: '2023-04-01',
                type: '進級',
                details: '3年次への進級'
            }
        ]
    },
    {
        id: 'STU002',
        studentId: '2022002001',
        name: '佐藤 花子',
        kana: 'サトウ ハナコ',
        english: 'Hanako Sato',
        birthDate: '2004-07-22',
        gender: '女性',
        nationality: '日本',
        faculty: 'law',
        department: '法律学科',
        grade: 2,
        enrollmentYear: 2022,
        enrollmentType: 'AO入試',
        status: '在学',
        address: '〒160-0022 東京都新宿区新宿1-1-1 新宿ビル501',
        phone: '090-2345-6789',
        email: 'h.sato@university.ac.jp',
        lastUpdate: '2024-02-28',
        emergencyContacts: [
            {
                name: '佐藤 一郎',
                relationship: '父親',
                phone: '090-2345-6780',
                email: 'i.sato@example.com'
            }
        ],
        history: [
            {
                date: '2022-04-01',
                type: '入学',
                details: '法学部法律学科 AO入試により入学'
            },
            {
                date: '2023-04-01',
                type: '進級',
                details: '2年次への進級'
            }
        ]
    },
    {
        id: 'STU003',
        studentId: '2020003001',
        name: '鈴木 一郎',
        kana: 'スズキ イチロウ',
        english: 'Ichiro Suzuki',
        birthDate: '2002-11-08',
        gender: '男性',
        nationality: '日本',
        faculty: 'engineering',
        department: '機械工学科',
        grade: 4,
        enrollmentYear: 2020,
        enrollmentType: '推薦入試',
        status: '休学',
        address: '〒141-0031 東京都品川区西五反田2-11-8',
        phone: '080-3456-7890',
        email: 'i.suzuki@university.ac.jp',
        lastUpdate: '2023-09-30',
        emergencyContacts: [
            {
                name: '鈴木 美子',
                relationship: '母親',
                phone: '080-3456-7891',
                email: 'y.suzuki@example.com'
            }
        ],
        history: [
            {
                date: '2020-04-01',
                type: '入学',
                details: '工学部機械工学科 推薦入試により入学'
            },
            {
                date: '2021-04-01',
                type: '進級',
                details: '2年次への進級'
            },
            {
                date: '2022-04-01',
                type: '進級',
                details: '3年次への進級'
            },
            {
                date: '2023-04-01',
                type: '進級',
                details: '4年次への進級'
            },
            {
                date: '2023-10-01',
                type: '休学',
                details: '学業継続困難により休学'
            }
        ]
    },
    {
        id: 'STU004',
        studentId: '2023004001',
        name: '田中 美咲',
        kana: 'タナカ ミサキ',
        english: 'Misaki Tanaka',
        birthDate: '2005-01-30',
        gender: '女性',
        nationality: '日本',
        faculty: 'literature',
        department: '日本文学科',
        grade: 1,
        enrollmentYear: 2023,
        enrollmentType: '一般入試',
        status: '在学',
        address: '〒113-0033 東京都文京区本郷7-3-1',
        phone: '090-4567-8901',
        email: 'm.tanaka@university.ac.jp',
        lastUpdate: '2024-01-20',
        emergencyContacts: [
            {
                name: '田中 太郎',
                relationship: '父親',
                phone: '090-4567-8902',
                email: 't.tanaka@example.com'
            }
        ],
        history: [
            {
                date: '2023-04-01',
                type: '入学',
                details: '文学部日本文学科 一般入試により入学'
            }
        ]
    },
    {
        id: 'STU005',
        studentId: '2019005001',
        name: '高橋 健太',
        kana: 'タカハシ ケンタ',
        english: 'Kenta Takahashi',
        birthDate: '2001-09-12',
        gender: '男性',
        nationality: '日本',
        faculty: 'science',
        department: '物理学科',
        grade: 5,
        enrollmentYear: 2019,
        enrollmentType: '一般入試',
        status: '卒業',
        address: '〒152-0035 東京都目黒区自由が丘1-29-1 フリーダムハイツ202',
        phone: '080-5678-9012',
        email: 'k.takahashi@university.ac.jp',
        lastUpdate: '2023-03-25',
        emergencyContacts: [
            {
                name: '高橋 明美',
                relationship: '母親',
                phone: '080-5678-9013',
                email: 'a.takahashi@example.com'
            }
        ],
        history: [
            {
                date: '2019-04-01',
                type: '入学',
                details: '理学部物理学科 一般入試により入学'
            },
            {
                date: '2020-04-01',
                type: '進級',
                details: '2年次への進級'
            },
            {
                date: '2021-04-01',
                type: '進級',
                details: '3年次への進級'
            },
            {
                date: '2022-04-01',
                type: '進級',
                details: '4年次への進級'
            },
            {
                date: '2023-03-25',
                type: '卒業',
                details: '理学部物理学科を卒業'
            }
        ]
    },
    {
        id: 'STU006',
        studentId: '2021006001',
        name: '渡辺 翔太',
        kana: 'ワタナベ ショウタ',
        english: 'Shota Watanabe',
        birthDate: '2003-06-18',
        gender: '男性',
        nationality: '日本',
        faculty: 'law',
        department: '政治学科',
        grade: 2,
        enrollmentYear: 2021,
        enrollmentType: '一般入試',
        status: '退学',
        address: '〒169-0074 東京都新宿区北新宿3-20-2 北新宿タワー1105',
        phone: '080-6789-0123',
        email: 's.watanabe@university.ac.jp',
        lastUpdate: '2022-02-01',
        emergencyContacts: [
            {
                name: '渡辺 洋子',
                relationship: '母親',
                phone: '080-6789-0124',
                email: 'y.watanabe@example.com'
            }
        ],
        history: [
            {
                date: '2021-04-01',
                type: '入学',
                details: '法学部政治学科 一般入試により入学'
            },
            {
                date: '2022-04-01',
                type: '進級',
                details: '2年次への進級'
            },
            {
                date: '2022-02-01',
                type: '退学',
                details: '一身上の都合により退学'
            }
        ]
    },
    {
        id: 'STU007',
        studentId: '2022007001',
        name: '中村 愛',
        kana: 'ナカムラ アイ',
        english: 'Ai Nakamura',
        birthDate: '2004-12-03',
        gender: '女性',
        nationality: '日本',
        faculty: 'literature',
        department: '英文学科',
        grade: 2,
        enrollmentYear: 2022,
        enrollmentType: '推薦入試',
        status: '在学',
        address: '〒158-0094 東京都世田谷区玉川1-15-6',
        phone: '090-7890-1234',
        email: 'a.nakamura@university.ac.jp',
        lastUpdate: '2024-03-10',
        emergencyContacts: [
            {
                name: '中村 正夫',
                relationship: '父親',
                phone: '090-7890-1235',
                email: 'm.nakamura@example.com'
            }
        ],
        history: [
            {
                date: '2022-04-01',
                type: '入学',
                details: '文学部英文学科 推薦入試により入学'
            },
            {
                date: '2023-04-01',
                type: '進級',
                details: '2年次への進級'
            }
        ]
    },
    {
        id: 'STU008',
        studentId: '2023008001',
        name: '小林 大輔',
        kana: 'コバヤシ ダイスケ',
        english: 'Daisuke Kobayashi',
        birthDate: '2005-03-25',
        gender: '男性',
        nationality: '日本',
        faculty: 'engineering',
        department: '電気工学科',
        grade: 1,
        enrollmentYear: 2023,
        enrollmentType: 'AO入試',
        status: '在学',
        address: '〒144-0052 東京都大田区蒲田5-13-14 蒲田マンション803',
        phone: '080-8901-2345',
        email: 'd.kobayashi@university.ac.jp',
        lastUpdate: '2024-02-15',
        emergencyContacts: [
            {
                name: '小林 恵子',
                relationship: '母親',
                phone: '080-8901-2346',
                email: 'k.kobayashi@example.com'
            }
        ],
        history: [
            {
                date: '2023-04-01',
                type: '入学',
                details: '工学部電気工学科 AO入試により入学'
            }
        ]
    }
];

const FACULTY_DATA = {
    economics: {
        name: '経済学部',
        departments: ['経済学科', '経営学科', '国際経済学科']
    },
    law: {
        name: '法学部',
        departments: ['法律学科', '政治学科']
    },
    literature: {
        name: '文学部',
        departments: ['日本文学科', '英文学科', '歴史学科']
    },
    science: {
        name: '理学部',
        departments: ['数学科', '物理学科', '化学科', '生物学科']
    },
    engineering: {
        name: '工学部',
        departments: ['機械工学科', '電気工学科', '情報工学科', '建築学科']
    }
};

// ===== アプリケーション状態 =====
class StudentManagementApp {
    constructor() {
        this.allStudents = [...STUDENT_DATA];
        this.filteredStudents = [...STUDENT_DATA];
        this.selectedStudent = null;
        this.currentView = 'grid';
        this.currentSort = 'name';
        this.savedFilters = this.loadSavedFilters();
        this.currentFilters = this.getDefaultFilters();
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.populateFacultyOptions();
        this.loadSavedFilterOptions();
        this.displayStudents();
        this.updateStats();
    }

    getDefaultFilters() {
        return {
            name: '',
            studentId: '',
            faculty: '',
            department: '',
            grade: '',
            statuses: ['在学', '休学', '卒業']
        };
    }

    // ===== イベントリスナー設定 =====
    setupEventListeners() {
        // フィルター関連
        document.getElementById('nameFilter').addEventListener('input', 
            this.debounce(() => this.applyFilters(), 300));
        document.getElementById('studentIdFilter').addEventListener('input', 
            this.debounce(() => this.applyFilters(), 300));
        document.getElementById('facultyFilter').addEventListener('change', () => {
            this.updateDepartmentOptions();
            this.applyFilters();
        });
        document.getElementById('departmentFilter').addEventListener('change', () => this.applyFilters());
        document.getElementById('gradeFilter').addEventListener('change', () => this.applyFilters());
        
        // ステータスチェックボックス
        document.querySelectorAll('.status-checkboxes input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', () => this.applyFilters());
        });

        // フィルタークリア
        document.getElementById('clearFilters').addEventListener('click', () => this.clearFilters());

        // 保存済みフィルター
        document.getElementById('loadSavedFilter').addEventListener('click', () => this.loadSelectedFilter());
        document.getElementById('saveCurrentFilter').addEventListener('click', () => this.showSaveFilterModal());
        document.getElementById('deleteSavedFilter').addEventListener('click', () => this.deleteSelectedFilter());

        // 表示切り替え
        document.querySelectorAll('.view-toggle').forEach(button => {
            button.addEventListener('click', (e) => this.switchView(e.target.dataset.view));
        });

        // ソート
        document.getElementById('sortBy').addEventListener('change', (e) => {
            this.currentSort = e.target.value;
            this.sortAndDisplayStudents();
        });

        // 詳細パネル
        document.getElementById('closeDetail').addEventListener('click', () => this.closeDetailPanel());

        // タブ切り替え
        document.querySelectorAll('.tab-button').forEach(button => {
            button.addEventListener('click', (e) => this.switchTab(e.target.dataset.tab));
        });

        // モーダル関連
        document.getElementById('confirmSave').addEventListener('click', () => this.saveCurrentFilter());
        document.getElementById('cancelSave').addEventListener('click', () => this.hideSaveFilterModal());
        document.querySelector('.modal-close').addEventListener('click', () => this.hideSaveFilterModal());
        
        // モーダル背景クリック
        document.getElementById('saveFilterModal').addEventListener('click', (e) => {
            if (e.target === e.currentTarget) {
                this.hideSaveFilterModal();
            }
        });
    }

    // ===== フィルター機能 =====
    populateFacultyOptions() {
        const facultySelect = document.getElementById('facultyFilter');
        Object.keys(FACULTY_DATA).forEach(key => {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = FACULTY_DATA[key].name;
            facultySelect.appendChild(option);
        });
    }

    updateDepartmentOptions() {
        const facultySelect = document.getElementById('facultyFilter');
        const departmentSelect = document.getElementById('departmentFilter');
        const selectedFaculty = facultySelect.value;

        // 学科選択肢をリセット
        departmentSelect.innerHTML = '<option value="">全学科</option>';

        if (selectedFaculty && FACULTY_DATA[selectedFaculty]) {
            FACULTY_DATA[selectedFaculty].departments.forEach(dept => {
                const option = document.createElement('option');
                option.value = dept;
                option.textContent = dept;
                departmentSelect.appendChild(option);
            });
        }
    }

    applyFilters() {
        // 現在のフィルター条件を取得
        this.currentFilters.name = document.getElementById('nameFilter').value.toLowerCase();
        this.currentFilters.studentId = document.getElementById('studentIdFilter').value;
        this.currentFilters.faculty = document.getElementById('facultyFilter').value;
        this.currentFilters.department = document.getElementById('departmentFilter').value;
        this.currentFilters.grade = document.getElementById('gradeFilter').value;
        
        // ステータスフィルター
        const checkedStatuses = Array.from(document.querySelectorAll('.status-checkboxes input[type="checkbox"]:checked'))
            .map(cb => cb.value);
        this.currentFilters.statuses = checkedStatuses;

        // フィルタリング実行
        this.filteredStudents = this.allStudents.filter(student => {
            // 氏名・フリガナ検索
            if (this.currentFilters.name) {
                const searchText = this.currentFilters.name;
                if (!student.name.toLowerCase().includes(searchText) && 
                    !student.kana.toLowerCase().includes(searchText)) {
                    return false;
                }
            }

            // 学籍番号（完全一致）
            if (this.currentFilters.studentId && student.studentId !== this.currentFilters.studentId) {
                return false;
            }

            // 学部
            if (this.currentFilters.faculty && student.faculty !== this.currentFilters.faculty) {
                return false;
            }

            // 学科
            if (this.currentFilters.department && student.department !== this.currentFilters.department) {
                return false;
            }

            // 学年
            if (this.currentFilters.grade && student.grade.toString() !== this.currentFilters.grade) {
                return false;
            }

            // ステータス
            if (!this.currentFilters.statuses.includes(student.status)) {
                return false;
            }

            return true;
        });

        this.sortAndDisplayStudents();
        this.updateStats();
    }

    clearFilters() {
        // フォーム要素をリセット
        document.getElementById('nameFilter').value = '';
        document.getElementById('studentIdFilter').value = '';
        document.getElementById('facultyFilter').value = '';
        document.getElementById('departmentFilter').value = '';
        document.getElementById('gradeFilter').value = '';

        // ステータスチェックボックスをデフォルト状態に
        document.querySelectorAll('.status-checkboxes input[type="checkbox"]').forEach(cb => {
            cb.checked = ['在学', '休学', '卒業'].includes(cb.value);
        });

        // 学科オプションをリセット
        this.updateDepartmentOptions();

        // フィルターを再適用
        this.currentFilters = this.getDefaultFilters();
        this.filteredStudents = [...this.allStudents];
        this.sortAndDisplayStudents();
        this.updateStats();
    }

    // ===== 保存済みフィルター機能 =====
    loadSavedFilters() {
        return JSON.parse(localStorage.getItem('studentFilters') || '{}');
    }

    saveSavedFilters() {
        localStorage.setItem('studentFilters', JSON.stringify(this.savedFilters));
    }

    loadSavedFilterOptions() {
        const select = document.getElementById('savedFilters');
        select.innerHTML = '<option value="">選択してください</option>';
        
        Object.keys(this.savedFilters).forEach(name => {
            const option = document.createElement('option');
            option.value = name;
            option.textContent = name;
            select.appendChild(option);
        });
    }

    loadSelectedFilter() {
        const select = document.getElementById('savedFilters');
        const filterName = select.value;
        
        if (!filterName || !this.savedFilters[filterName]) {
            return;
        }

        const filter = this.savedFilters[filterName];
        
        // フォームに値を設定
        document.getElementById('nameFilter').value = filter.name || '';
        document.getElementById('studentIdFilter').value = filter.studentId || '';
        document.getElementById('facultyFilter').value = filter.faculty || '';
        this.updateDepartmentOptions();
        document.getElementById('departmentFilter').value = filter.department || '';
        document.getElementById('gradeFilter').value = filter.grade || '';

        // ステータスチェックボックス
        document.querySelectorAll('.status-checkboxes input[type="checkbox"]').forEach(cb => {
            cb.checked = filter.statuses.includes(cb.value);
        });

        this.applyFilters();
    }

    showSaveFilterModal() {
        document.getElementById('saveFilterModal').classList.add('show');
        document.getElementById('filterName').focus();
    }

    hideSaveFilterModal() {
        document.getElementById('saveFilterModal').classList.remove('show');
        document.getElementById('filterName').value = '';
    }

    saveCurrentFilter() {
        const filterName = document.getElementById('filterName').value.trim();
        if (!filterName) {
            alert('フィルター名を入力してください');
            return;
        }

        this.savedFilters[filterName] = { ...this.currentFilters };
        this.saveSavedFilters();
        this.loadSavedFilterOptions();
        this.hideSaveFilterModal();
        
        alert(`フィルター「${filterName}」を保存しました`);
    }

    deleteSelectedFilter() {
        const select = document.getElementById('savedFilters');
        const filterName = select.value;
        
        if (!filterName) {
            alert('削除するフィルターを選択してください');
            return;
        }

        if (confirm(`フィルター「${filterName}」を削除しますか？`)) {
            delete this.savedFilters[filterName];
            this.saveSavedFilters();
            this.loadSavedFilterOptions();
        }
    }

    // ===== 表示・ソート機能 =====
    switchView(view) {
        this.currentView = view;
        
        // ボタンの状態更新
        document.querySelectorAll('.view-toggle').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.view === view);
        });

        // 表示モード切り替え
        const collection = document.getElementById('studentsCollection');
        collection.classList.toggle('list-view', view === 'list');

        this.displayStudents();
    }

    sortAndDisplayStudents() {
        this.sortStudents();
        this.displayStudents();
    }

    sortStudents() {
        this.filteredStudents.sort((a, b) => {
            switch (this.currentSort) {
                case 'name':
                    return a.name.localeCompare(b.name, 'ja');
                case 'studentId':
                    return a.studentId.localeCompare(b.studentId);
                case 'faculty':
                    const facultyCompare = FACULTY_DATA[a.faculty].name.localeCompare(FACULTY_DATA[b.faculty].name, 'ja');
                    return facultyCompare !== 0 ? facultyCompare : a.department.localeCompare(b.department, 'ja');
                case 'grade':
                    return a.grade - b.grade;
                case 'lastUpdate':
                    return new Date(b.lastUpdate) - new Date(a.lastUpdate);
                default:
                    return 0;
            }
        });
    }

    displayStudents() {
        const collection = document.getElementById('studentsCollection');
        
        if (this.filteredStudents.length === 0) {
            collection.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-secondary);">
                    <p>条件に一致する学生が見つかりませんでした</p>
                </div>
            `;
            return;
        }

        collection.innerHTML = this.filteredStudents.map(student => this.createStudentCard(student)).join('');
    }

    createStudentCard(student) {
        const isSelected = this.selectedStudent && this.selectedStudent.id === student.id;
        
        return `
            <div class="student-card ${isSelected ? 'selected' : ''}" onclick="app.selectStudent('${student.id}')">
                <div class="student-card-header">
                    <div class="student-basic-info">
                        <h3>${student.name}</h3>
                        <div class="student-id">${student.studentId}</div>
                    </div>
                    <span class="status-badge status-${this.getStatusClass(student.status)}">${student.status}</span>
                </div>
                <div class="student-card-body">
                    <div class="student-meta">
                        <span class="academic-info">${FACULTY_DATA[student.faculty].name} ${student.department}</span>
                        <span>${student.grade}年</span>
                    </div>
                    <div class="student-meta">
                        <span>入学: ${student.enrollmentYear}年</span>
                        <span>更新: ${this.formatDate(student.lastUpdate)}</span>
                    </div>
                </div>
            </div>
        `;
    }

    getStatusClass(status) {
        const statusMap = {
            '在学': 'enrolled',
            '休学': 'leave',
            '卒業': 'graduated',
            '退学': 'withdrawn',
            '除籍': 'expelled'
        };
        return statusMap[status] || 'enrolled';
    }

    // ===== 学生詳細表示 =====
    selectStudent(studentId) {
        const student = this.allStudents.find(s => s.id === studentId);
        if (!student) return;

        this.selectedStudent = student;
        this.showDetailPanel(student);
        this.updateSelectedStudentCards();
        this.updateStats();
    }

    updateSelectedStudentCards() {
        document.querySelectorAll('.student-card').forEach(card => {
            card.classList.remove('selected');
        });
        
        if (this.selectedStudent) {
            const selectedCard = document.querySelector(`[onclick="app.selectStudent('${this.selectedStudent.id}')"]`);
            if (selectedCard) {
                selectedCard.classList.add('selected');
            }
        }
    }

    showDetailPanel(student) {
        // プレースホルダーを非表示、詳細コンテンツを表示
        document.querySelector('.detail-placeholder').style.display = 'none';
        document.getElementById('detailContent').style.display = 'flex';

        // ヘッダー情報
        document.getElementById('detailStudentName').textContent = student.name;
        document.getElementById('detailStudentId').textContent = student.studentId;
        document.getElementById('detailStatus').className = `status-badge status-${this.getStatusClass(student.status)}`;
        document.getElementById('detailStatus').textContent = student.status;

        // タブコンテンツを更新
        this.updateBasicTab(student);
        this.updateAcademicTab(student);
        this.updateHistoryTab(student);
        this.updateContactTab(student);
    }

    updateBasicTab(student) {
        document.getElementById('basicName').textContent = student.name;
        document.getElementById('basicKana').textContent = student.kana;
        document.getElementById('basicEnglish').textContent = student.english;
        document.getElementById('basicBirthDate').textContent = this.formatDate(student.birthDate);
        document.getElementById('basicGender').textContent = student.gender;
        document.getElementById('basicNationality').textContent = student.nationality;
        document.getElementById('basicAddress').textContent = student.address;
        document.getElementById('basicPhone').textContent = student.phone;
        document.getElementById('basicEmail').textContent = student.email;
    }

    updateAcademicTab(student) {
        document.getElementById('academicStudentId').textContent = student.studentId;
        document.getElementById('academicEnrollmentYear').textContent = `${student.enrollmentYear}年`;
        document.getElementById('academicFaculty').textContent = FACULTY_DATA[student.faculty].name;
        document.getElementById('academicDepartment').textContent = student.department;
        document.getElementById('academicGrade').textContent = `${student.grade}年`;
        document.getElementById('academicStatus').className = `status-badge status-${this.getStatusClass(student.status)}`;
        document.getElementById('academicStatus').textContent = student.status;
        document.getElementById('academicEnrollmentType').textContent = student.enrollmentType;
        document.getElementById('academicLastUpdate').textContent = this.formatDate(student.lastUpdate);
    }

    updateHistoryTab(student) {
        const timeline = document.getElementById('historyTimeline');
        
        if (!student.history || student.history.length === 0) {
            timeline.innerHTML = '<p style="color: var(--text-secondary); text-align: center; padding: 2rem;">履歴データがありません</p>';
            return;
        }

        timeline.innerHTML = student.history.map(item => `
            <div class="history-item">
                <div class="history-date">${this.formatDate(item.date)}</div>
                <div class="history-type">${item.type}</div>
                <div class="history-details">${item.details}</div>
            </div>
        `).join('');
    }

    updateContactTab(student) {
        const contactList = document.getElementById('emergencyContacts');
        
        if (!student.emergencyContacts || student.emergencyContacts.length === 0) {
            contactList.innerHTML = '<p style="color: var(--text-secondary); text-align: center; padding: 2rem;">緊急連絡先が登録されていません</p>';
            return;
        }

        contactList.innerHTML = student.emergencyContacts.map(contact => `
            <div class="contact-item">
                <div class="contact-name">${contact.name}</div>
                <div class="contact-relationship">${contact.relationship}</div>
                <div class="contact-details">
                    <div>電話: ${contact.phone}</div>
                    <div>メール: ${contact.email}</div>
                </div>
            </div>
        `).join('');
    }

    closeDetailPanel() {
        document.querySelector('.detail-placeholder').style.display = 'flex';
        document.getElementById('detailContent').style.display = 'none';
        this.selectedStudent = null;
        this.updateSelectedStudentCards();
        this.updateStats();
    }

    switchTab(tabName) {
        // タブボタンの状態更新
        document.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tabName);
        });

        // タブコンテンツの表示切り替え
        document.querySelectorAll('.tab-pane').forEach(pane => {
            pane.classList.remove('active');
        });

        const targetTab = document.getElementById(`${tabName}Tab`);
        if (targetTab) {
            targetTab.classList.add('active');
        }
    }

    // ===== 統計情報更新 =====
    updateStats() {
        document.getElementById('totalStudents').textContent = this.allStudents.length;
        document.getElementById('visibleStudents').textContent = this.filteredStudents.length;
        document.getElementById('selectedCount').textContent = this.selectedStudent ? 1 : 0;
    }

    // ===== ユーティリティ関数 =====
    formatDate(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}/${month}/${day}`;
    }

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

// ===== アプリケーション初期化 =====
let app;

document.addEventListener('DOMContentLoaded', () => {
    app = new StudentManagementApp();
});

// ===== グローバル関数（HTML内のonclick用） =====
function selectStudent(id) {
    app.selectStudent(id);
}