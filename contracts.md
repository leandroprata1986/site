# API Contracts - Curso Teológico Beit Nevi'im

## Dados Mockados (mock.js)

### 1. courseInfo
- Informações básicas do curso (nome, descrição, duração, modalidade, preço, próxima turma)

### 2. curriculum  
- Array com 4 semestres
- Cada semestre: id, semester, subjects[]

### 3. professors
- Array de professores: id, name, specialty, credentials, image

### 4. gallery
- Array de imagens: id, title, image

### 5. testimonials
- Array de depoimentos: id, name, role, testimonial

### 6. contactInfo
- Informações de contato: address, phone, email, whatsapp, socialMedia

## APIs Backend Necessárias

### Autenticação
- `POST /api/auth/login` - Login de usuários/alunos
- `POST /api/auth/register` - Registro de novos alunos
- `GET /api/auth/me` - Dados do usuário logado
- `POST /api/auth/logout` - Logout

### Informações do Curso
- `GET /api/course` - Informações básicas do curso
- `PUT /api/course` - Atualizar informações (admin only)

### Grade Curricular
- `GET /api/curriculum` - Buscar grade curricular
- `POST /api/curriculum` - Criar semestre (admin only)
- `PUT /api/curriculum/:id` - Atualizar semestre (admin only)
- `DELETE /api/curriculum/:id` - Deletar semestre (admin only)

### Professores
- `GET /api/professors` - Listar todos os professores
- `POST /api/professors` - Criar professor (admin only)
- `PUT /api/professors/:id` - Atualizar professor (admin only)
- `DELETE /api/professors/:id` - Deletar professor (admin only)

### Galeria
- `GET /api/gallery` - Buscar imagens da galeria
- `POST /api/gallery` - Adicionar imagem (admin only)
- `DELETE /api/gallery/:id` - Deletar imagem (admin only)

### Contato
- `POST /api/contact` - Enviar mensagem de contato
- `GET /api/contact` - Listar mensagens (admin only)

### Depoimentos
- `GET /api/testimonials` - Buscar depoimentos
- `POST /api/testimonials` - Criar depoimento (admin only)

## Modelos MongoDB

### User
```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed),
  role: String (enum: ['student', 'admin']),
  createdAt: Date,
  updatedAt: Date
}
```

### Course
```javascript
{
  _id: ObjectId,
  name: String,
  description: String,
  duration: String,
  modality: String,
  price: String,
  nextStart: String,
  updatedAt: Date
}
```

### Curriculum
```javascript
{
  _id: ObjectId,
  semester: String,
  subjects: [String],
  order: Number,
  createdAt: Date
}
```

### Professor
```javascript
{
  _id: ObjectId,
  name: String,
  specialty: String,
  credentials: String,
  image: String,
  order: Number,
  active: Boolean,
  createdAt: Date
}
```

### Gallery
```javascript
{
  _id: ObjectId,
  title: String,
  image: String,
  order: Number,
  active: Boolean,
  createdAt: Date
}
```

### Contact
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  phone: String,
  message: String,
  status: String (enum: ['pending', 'responded']),
  createdAt: Date
}
```

### Testimonial
```javascript
{
  _id: ObjectId,
  name: String,
  role: String,
  testimonial: String,
  active: Boolean,
  order: Number,
  createdAt: Date
}
```

## Integração Frontend-Backend

### 1. Remover mock.js
- Substituir imports de mock.js por chamadas API

### 2. Serviços API
- Criar arquivo `/frontend/src/services/api.js` com todas as chamadas
- Usar axios com interceptors para autenticação

### 3. Autenticação
- Implementar context para gerenciar estado do usuário
- Salvar JWT no localStorage
- Interceptors para renovação automática de token

### 4. Estados de Loading
- Adicionar loading states para todas as chamadas API
- Error handling apropriado

### 5. Formulários
- Integrar formulário de login com API real
- Formulário de contato enviando para backend
- Validações no frontend e backend

## Funcionalidades Específicas

### Login Modal
- Autenticar com email/senha
- Retornar JWT token
- Redirecionar para área do aluno (futuro)

### Formulário de Contato  
- Validações frontend
- Envio para API backend
- Confirmação de envio
- Email de notificação (opcional)

### Admin Panel (Futuro)
- Dashboard para gerenciar conteúdo
- CRUD para professores, galeria, currículo
- Visualizar mensagens de contato

## Segurança

### Autenticação JWT
- Tokens com expiração
- Refresh token para renovação
- Middleware de autenticação

### Autorização
- Controle de acesso baseado em roles (student/admin)
- Validação em todos os endpoints protegidos

### Validação
- Validação de dados de entrada
- Sanitização de dados
- Rate limiting para APIs públicas

## Migration Strategy

1. Implementar modelos e APIs backend
2. Popular dados iniciais no MongoDB
3. Criar serviços de API no frontend  
4. Substituir gradualmente os mocks
5. Implementar autenticação
6. Testes completos
7. Deploy

Essa estrutura garante uma transição suave do frontend mockado para um sistema full-stack completo.