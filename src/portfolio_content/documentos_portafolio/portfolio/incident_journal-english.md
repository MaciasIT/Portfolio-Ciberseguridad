**Incident handler's journal**

---

## Entry Index

| Entry  | Date        | Brief Description                                  | NIST Phase                      |
|--------|-------------|----------------------------------------------------|---------------------------------|
| #1     | 14/05/2025  | Ransomware attack on healthcare clinic             | Detection, Containment, Recovery|
| #2     | 28/05/2025  | Phishing alert in HR department                    | Detection and analysis          |
| #3     | 10/06/2025  | Traffic capture and analysis with tcpdump          | Detection and analysis          |
| #4     | 24/06/2025  | Packet analysis with Wireshark                     | Detection and analysis          |
| #5     | 08/07/2025  | Response to phishing alert with playbook           | Detection, Containment          |
| #6     | 22/07/2025  | Investigation of suspicious hash with VirusTotal   | Detection and analysis          |
| #7     | 05/08/2025  | Review of final incident report                    | Post-incident                   |
| #8     | 19/08/2025  | Custom rules in Suricata                           | Detection and analysis          |
| #9     | 30/09/2025  | Wazuh queries on security events                   | Detection and analysis          |

---

| Date: 14/05/2025 | Entry: #1 | NIST Phase: Detection, Containment, Recovery |  |
| :---- | :---- | :---- | ----- |
| **Description** | A ransomware attack on a healthcare clinic is documented. Phase: Detection and analysis, Containment and recovery. The incident was investigated, the network was isolated, and critical systems were restored to resume operations. |  |  |
| **Tool(s) used** | Antivirus, SIEM, EDR, IRP, IDS/IPS, Backup. |  |  |
| **The 5 W's** | **Who:** Organized cybercriminal group via phishing.  
**What:** Ransomware attack, file encryption, and system lockdown.  
**When:** Tuesday morning, 9:00 a.m.  
**Where:** IT infrastructure of a healthcare clinic in the US.  
**Why:** Economic motivation, exploiting lack of phishing protection. |  |  |
| **Additional notes** | Importance of backups and phishing awareness training. |  |  |
| **Key learning** | Quick response and having backups are essential to minimize ransomware impact. |  |  |
| **Improvement recommendation** | Implement phishing drills and regular backup audits. |  |  |

---

| Date: 28/05/2025 | Entry: #2 | NIST Phase: Detection and analysis |  |
| :---- | :---- | :---- | ----- |
| **Description** | A phishing alert received by email is investigated. Phase: Detection and analysis. A malicious file was identified and strengthening controls and training was recommended to prevent similar future incidents. |  |  |
| **Tool(s) used** | VirusTotal, ticketing system (SOC), email alert management. |  |  |
| **The 5 W's** | **Who:** HR employee received the email; unknown attacker.  
**What:** Phishing attempt with malicious executable file.  
**When:** May 28, 2025.  
**Where:** Corporate email of the HR department.  
**Why:** Attempt to compromise the system via malware. |  |  |
| **Additional notes** | Strengthen phishing training and review attachment filtering policies. |  |  |
| **Key learning** | Early phishing detection depends on training and proper technical controls. |  |  |
| **Improvement recommendation** | Improve email filters and run awareness campaigns. |  |  |

---

| Date: 10/06/2025 | Entry: #3 | NIST Phase: Detection and analysis |  |
| :---- | :---- | :---- | ----- |
| **Description** | Network traffic capture and analysis with tcpdump. Phase: Detection and analysis. The goal was to identify suspicious patterns and become familiar with real-time monitoring tools. |  |  |
| **Tool(s) used** | tcpdump, ifconfig, curl. |  |  |
| **The 5 W's** | **Who:** Lab simulation, not a real incident.  
**What:** Capture and analysis of network traffic, protocol and communication details identification.  
**When:** June 10, 2025.  
**Where:** Linux lab environment, using a VM and sample files.  
**Why:** Gain practical experience with tcpdump for detection and analysis. |  |  |
| **Additional notes** | Selective traffic capture and detailed/hexadecimal data analysis were practiced. |  |  |
| **Key learning** | Real-time traffic analysis helps detect anomalies and potential threats. |  |  |
| **Improvement recommendation** | Automate alerts for suspicious traffic and document procedures. |  |  |

---

| Date: 24/06/2025 | Entry: #4 | NIST Phase: Detection and analysis |  |
| :---- | :---- | :---- | ----- |
| **Description** | A .pcap file is analyzed with Wireshark to identify protocols and anomalies. Phase: Detection and analysis. Filters were applied to isolate relevant traffic and understand packet structure. |  |  |
| **Tool(s) used** | Wireshark, filters like `ip.addr`, `tcp.port`, `udp.port`, `eth.addr`. |  |  |
| **The 5 W's** | **Who:** Lab simulation, not a real incident.  
**What:** Analysis of captured network packets to identify protocols and communication details.  
**When:** June 24, 2025.  
**Where:** Local lab, sample file in Wireshark.  
**Why:** Learn to use Wireshark for network traffic detection and analysis. |  |  |
| **Additional notes** | Using filters in Wireshark makes it easier to identify relevant traffic and inspect protocol details. |  |  |
| **Key learning** | Wireshark allows in-depth visualization and understanding of network traffic. |  |  |
| **Improvement recommendation** | Create quick filter guides and share them with the team. |  |  |

---

| Date: 08/07/2025 | Entry: #5 | NIST Phase: Detection and analysis, Containment |  |
| :---- | :---- | :---- | ----- |
| **Description** | Phishing alert response following the institutional playbook. Phase: Detection and analysis, Containment. The file hash was verified and actions were documented in the ticketing system. |  |  |
| **Tool(s) used** | Ticketing system, VirusTotal, response playbook. |  |  |
| **The 5 W's** | **Who:** HR employee received the email; unknown attacker.  
**What:** Phishing attempt with malicious executable attachment.  
**When:** July 8, 2025.  
**Where:** Corporate email of the HR department.  
**Why:** Attempt to compromise the system via malware, using social engineering and a password-protected file. |  |  |
| **Additional notes** | Playbook steps were followed and ticket closure was documented after confirming file risk. |  |  |
| **Key learning** | Following a playbook streamlines response and ensures proper documentation. |  |  |
| **Improvement recommendation** | Periodically review and update playbooks. |  |  |

---

| Date: 22/07/2025 | Entry: #6 | NIST Phase: Detection and analysis |  |
| :---- | :---- | :---- | ----- |
| **Description** | Suspicious file investigated with VirusTotal and IoCs identified using the Pyramid of Pain. Phase: Detection and analysis. Blocking IoCs and reinforcing training is recommended. |  |  |
| **Tool(s) used** | VirusTotal, Pyramid of Pain. |  |  |
| **The 5 W's** | **Who:** Financial services employee received the file.  
**What:** Malicious attachment executed after opening a password-protected spreadsheet.  
**When:** July 22, 2025.  
**Where:** Employee's device, detected by IDS.  
**Why:** Attacker sought to execute malware via social engineering and a protected file. |  |  |
| **Additional notes** | SHA256 hash confirmed as malicious. Blocking IoCs and reinforcing security training is recommended. |  |  |
| **Key learning** | Classifying IoCs helps prioritize defense and response actions. |  |  |
| **Improvement recommendation** | Maintain an updated IoC database and share with the team. |  |  |

---

| Date: 05/08/2025 | Entry: #7 | NIST Phase: Post-incident |  |
| :---- | :---- | :---- | ----- |
| **Description** | Final incident report reviewed for a data breach. Phase: Post-incident activity. Causes, actions taken, and recommendations to prevent future incidents are identified. |  |  |
| **Tool(s) used** | Final incident report, course support materials. |  |  |
| **The 5 W's** | **Who:** Unknown attacker exploited a vulnerability in the e-commerce web app.  
**What:** Data theft of over a million users via forced browsing.  
**When:** August 5, 2025.  
**Where:** E-commerce platform of the retail company.  
**Why:** Web app vulnerability allowed unauthorized access to sensitive data. |  |  |
| **Additional notes** | Actions: investigation, mitigation, notification to affected parties and authorities. Recommendations: access controls and vulnerability scans. |  |  |
| **Key learning** | Documenting incidents and lessons learned improves future security. |  |  |
| **Improvement recommendation** | Conduct post-incident reviews and update preventive controls. |  |  |

---

| Date: 19/08/2025 | Entry: #8 | NIST Phase: Detection and analysis |  |
| :---- | :---- | :---- | ----- |
| **Description** | Custom rules configured and tested in Suricata to detect malicious traffic. Phase: Detection and analysis. Alerts generated were analyzed to improve threat response capability. |  |  |
| **Tool(s) used** | Suricata, jq, cat, less. |  |  |
| **The 5 W's** | **Who:** Lab simulation, not a real incident.  
**What:** Creation and activation of IDS rules, HTTP traffic analysis, and alert review.  
**When:** August 19, 2025.  
**Where:** Linux lab environment, using sample files and Suricata.  
**Why:** Gain practical experience in threat detection via custom rules and log analysis. |  |  |
| **Additional notes** | Rule editing, Suricata execution, and alert analysis in different log formats were practiced. |  |  |
| **Key learning** | Customizing IDS rules allows detection to be tailored to real needs. |  |  |
| **Improvement recommendation** | Periodically review and optimize IDS rules. |  |  |

---

| Date: 30/09/2025 | Entry: #9 | NIST Phase: Detection and analysis |  |
| :---- | :---- | :---- | ----- |
| **Description** | Wazuh queries performed to detect unauthorized access attempts. Phase: Detection and analysis. Critical events were identified and query techniques practiced to improve incident response. |  |  |
| **Tool(s) used** | Wazuh, tutorialdata.zip. |  |  |
| **The 5 W's** | **Who:** Security analyst at Buttercup Games.  
**What:** Investigation of security events, especially failed SSH logins for root.  
**When:** September 30, 2025.  
**Where:** Wazuh platform, lab environment.  
**Why:** Identify possible unauthorized access attempts and improve incident detection on the mail server. |  |  |
| **Additional notes** | Over 100,000 events and 376 failed SSH login attempts for root were identified. Filters and fields were used to narrow searches. |  |  |
| **Key learning** | SIEM use facilitates management and analysis of large volumes of security data. |  |  |
| **Improvement recommendation** | Automate alerts in Wazuh and train the team in advanced queries. |  |  |

---

## Incident Table by NIST Phase

| NIST Phase                      | Number of Incidents |
|----------------------------------|---------------------|
| Detection and analysis           | 7                   |
| Containment, eradication, recovery | 2                 |
| Post-incident activity           | 1                   |

---

### Reflections/Notes

**Was there any specific activity that was challenging for you? Why or why not?**  
The activity of creating custom rules in Suricata was especially challenging, as it required understanding the syntax and logic of IDS rules. I struggled to correctly identify malicious traffic patterns and validate the generated alerts.

**Has your understanding of incident detection and response changed since taking this course?**  
Yes, my understanding has improved significantly. I now recognize the importance of each phase of the NIST lifecycle and how tools and procedures integrate for effective response. I have learned to document and analyze incidents in a more structured way.

**Was there any specific tool or concept you liked most? Why?**  
Wireshark was the tool I liked most because it allows detailed and practical visualization and analysis of network traffic. It helped me understand how systems communicate and identify potential threats in real time.

---