#!/usr/bin/env python3

import argparse
import socket
import sys
from datetime import datetime

def print_banner():
    """Imprime un banner de bienvenida."""
    print("-" * 60)
    print("          Analizador de Puertos en Python")
    print("                Autor: Gemini & Usuario")
    print("-" * 60)

def get_arguments():
    """Obtiene y parsea los argumentos de la línea de comandos."""
    parser = argparse.ArgumentParser(
        description="Analizador de puertos simple para un host y rango de puertos específicos.",
        epilog="Ejemplo de uso: python port_scanner.py 192.168.1.1 -s 1 -e 1024"
    )
    parser.add_argument("host", type=str, help="Host o dirección IP a escanear.")
    parser.add_argument("-s", "--start", type=int, default=1, help="Puerto de inicio del escaneo (por defecto: 1).")
    parser.add_argument("-e", "--end", type=int, default=1024, help="Puerto de fin del escaneo (por defecto: 1024).")
    parser.add_argument("-t", "--timeout", type=float, default=0.5, help="Timeout para cada conexión en segundos (por defecto: 0.5).")
    
    # Imprimir ayuda si no se proporcionan argumentos
    if len(sys.argv) == 1:
        parser.print_help(sys.stderr)
        sys.exit(1)
        
    return parser.parse_args()

def scan_port(host, port, timeout):
    """
    Intenta conectar a un puerto específico y devuelve True si está abierto, False si no.
    """
    try:
        # Crear un nuevo socket para cada intento
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.settimeout(timeout)
        # connect_ex devuelve 0 si la conexión es exitosa
        result = sock.connect_ex((host, port))
        sock.close()
        return result == 0
    except socket.error as e:
        # En caso de error en la conexión, asumimos que el puerto está cerrado o filtrado
        # print(f"Error de socket en puerto {port}: {e}") # Descomentar para depuración
        return False

def main():
    """Función principal del script."""
    print_banner()
    args = get_arguments()

    host = args.host
    start_port = args.start
    end_port = args.end
    timeout = args.timeout

    try:
        target_ip = socket.gethostbyname(host)
        print(f"[*] Escaneando Host: {host} ({target_ip})")
        print(f"[*] Rango de Puertos: {start_port}-{end_port}")
        print(f"[*] Hora de inicio: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        print("-" * 60)

        open_ports = []

        for port in range(start_port, end_port + 1):
            print(f"\r[*] Escaneando puerto: {port}", end="")
            sys.stdout.flush()
            if scan_port(target_ip, port, timeout):
                # Limpiar la línea antes de imprimir el puerto abierto
                print("\r" + " " * 40 + "\r", end="")
                print(f"[+] Puerto {port} está abierto.")
                open_ports.append(port)
        
        print("\n" + "-" * 60)
        print("Escaneo completado.")
        if open_ports:
            print(f"Puertos abiertos encontrados: {', '.join(map(str, open_ports))}")
        else:
            print("No se encontraron puertos abiertos en el rango especificado.")

    except KeyboardInterrupt:
        print("\n[!] Escaneo cancelado por el usuario.")
        sys.exit()
    except socket.gaierror:
        print(f"\n[!] Error: El host '{host}' no pudo ser resuelto.")
        sys.exit()
    except socket.error:
        print("\n[!] Error: No se pudo conectar al servidor.")
        sys.exit()

if __name__ == "__main__":
    main()
