
# Imagem base com Python
FROM python:3.11-slim

# Diretorio de trabalho
WORKDIR /app

# Copia e instala as dependencias
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copia o codigo do projeto
COPY backend/ ./backend/

# Comando para executar os testes
CMD ["python", "-m", "pytest", "backend/", "-v"]
