#!/usr/bin/env python3

import argparse
import sys
import re

def print_banner():
    """Imprime un banner de bienvenida."""
    print("-" * 60)
    print("        Analizador de Logs en Python")
    print("     Busca patrones de ataques comunes en logs web")
    print("-" * 60)

def get_arguments():
    """Obtiene y parsea los argumentos de la línea de comandos."""
    parser = argparse.ArgumentParser(
        description="Analiza un archivo de log de acceso web en busca de patrones sospechosos.",
        epilog="Ejemplo de uso: python log_analyzer.py /var/log/apache2/access.log"
    )
    parser.add_argument("logfile", type=str, help="Ruta al archivo de log a analizar.")
    
    if len(sys.argv) == 1:
        parser.print_help(sys.stderr)
        sys.exit(1)
        
    return parser.parse_args()

def analyze_log(logfile):
    """
    Analiza el archivo de log en busca de patrones maliciosos.
    """
    # Diccionario de patrones de ataque (expresiones regulares)
    # La 'i' al final de cada patrón indica que no distingue mayúsculas/minúsculas
    attack_patterns = {
        "Inyección SQL (SQLi)": re.compile(r"(UNION\s+SELECT|SELECT\s+.*FROM|--|' OR '1'='1')", re.IGNORECASE),
        "Cross-Site Scripting (XSS)": re.compile(r"(<script>|alert\(|onerror=|javascript:)", re.IGNORECASE),
        "Escaneo de Directorios/Archivos Sensibles": re.compile(r"(\.\./|/etc/passwd|wp-admin|phpmyadmin|\.env)", re.IGNORECASE),
        "Inyección de Comandos": re.compile(r"(;|\s)cat\s+/etc/passwd", re.IGNORECASE)
    }

    suspicious_lines_count = 0
    print(f"\n[*] Analizando el archivo: {logfile}\n")

    try:
        with open(logfile, 'r') as f:
            for line_num, line in enumerate(f, 1):
                for attack_type, pattern in attack_patterns.items():
                    if pattern.search(line):
                        print(f"[!] Línea Sospechosa encontrada ({line_num}):")
                        print(f"  Motivo: Posible {attack_type}")
                        print(f"  Contenido: {line.strip()}\n")
                        suspicious_lines_count += 1
                        # Rompemos el bucle interno para no reportar la misma línea múltiples veces
                        break
    except FileNotFoundError:
        print(f"[ERROR] El archivo '{logfile}' no fue encontrado.")
        sys.exit(1)
    except Exception as e:
        print(f"[ERROR] Ocurrió un error inesperado: {e}")
        sys.exit(1)

    return suspicious_lines_count

def main():
    """Función principal del script."""
    print_banner()
    args = get_arguments()
    
    total_suspicious = analyze_log(args.logfile)

    print("-" * 60)
    if total_suspicious > 0:
        print(f"Análisis completado. Se encontraron {total_suspicious} líneas sospechosas.")
    else:
        print("Análisis completado. No se encontraron patrones sospechosos definidos.")

if __name__ == "__main__":
    main()
