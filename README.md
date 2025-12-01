# Trimly — Sistema de Agendamentos para Barbearias

O Trimly é uma plataforma completa para agendamentos de serviços de barbearia, permitindo que clientes agendem horários, barbeiros gerenciem seus atendimentos e administradores controlem toda a operação.  
O sistema foi desenvolvido com React, Node.js, Express, TailwindCSS, MongoDB e Cloudinary.

---

## Acesse
- Dashboard geral com estatísticas:
  - Total de barbeiros
### Página do Usuário: https://trimly-frontend-d5o4.onrender.com
### Dashboard do Admin/Barbeiro: https://trimly-admin.onrender.com

## Login
- Usuário
  - User: joaoborges@trimly.com
  - Senha: joao1234
 
- Barbeiro
  - User: leonardo@trimly.com
  - Senha: leonardo1234
  - Substitua o "leonardo" pelo primeiro nome do barbeiro que deseja acessar
 
- Admin
  - User: admin@trimly.com
  - Senha: admin1234
    
---

## Página do Usuário
<img width="1920" height="3678" alt="trimly-home" src="https://github.com/user-attachments/assets/7a5a22d4-14fc-4228-b9e9-ec0133fbe422" />

## Dashboard do Barbeiro
<img width="1928" height="1088" alt="trimly-barber" src="https://github.com/user-attachments/assets/89a9bbaa-1e1b-44e0-9525-f27eab668bc6" />

## Dashboard do Admin
<img width="1926" height="1081" alt="trimly-admin" src="https://github.com/user-attachments/assets/cfe9ce0d-dc7c-4db9-9911-b126b9cf5672" />

---

## Funcionalidades
### Cliente (Usuário)
- Criar conta e fazer login
- Editar perfil
- Listar barbeiros
- Visualizar perfil do barbeiro
- Ver agenda disponível por dia e horário
- Agendar horário
- Cancelar agendamento
- Ver barbeiros relacionados por especialidade

### Barbeiro
- Login exclusivo para barbeiros
- Dashboard com:
  - Últimos agendamentos
  - Lista de pacientes
  - Ganhos totais
  - Atendimentos concluídos e cancelados
- Alterar disponibilidade (online/offline)
- Editar perfil:
  - Nome
  - Sobre
  - Formação
  - Especialidade
  - Experiência
  - Endereço
  - Valor da consulta/serviço
- Ver agendamentos do dia
- Cancelar agendamento
- Marcar como concluído

### Administrador
- Login exclusivo de admin
- Dashboard geral com estatísticas:
  - Total de barbeiros
  - Total de clientes
  - Total de agendamentos
- Criar barbeiros
- Listar barbeiros
- Ver todos os agendamentos
- Cancelar agendamentos
- Ver últimos agendamentos criados
- Painel seguro utilizando autenticação JWT

---

## Tecnologias Utilizadas
### Frontend
- React.js + Vite
- Context API
- Axios
- TailwindCSS
- React Router
- React Toastify

### Backend
- Node.js
- Express.js
- Mongoose
- MongoDB
- Cloudinary
- JWT Authentication
- Bcrypt.js

---
```
## Estrutura do Projeto
TRIMLY/
│
├── admin/
│   ├── src/
│   ├── public/
│   ├── .env
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── clientside/
    ├── src/
    ├── public/
    ├── .env
    ├── package.json
    └── vite.config.js
```

- Admin Frontend separado
Interface exclusiva para gestão de barbeiros, agendamentos e dashboards.

- Backend isolado
API REST com autenticação, conexão com MongoDB e toda a lógica da aplicação.

- Frontend do Cliente + Barbeiro separado
Aplicação principal para usuários finais e para os barbeiros acessarem seus dashboards.

---

### Licença
## Este projeto é de uso privado e não possui licença de distribuição
