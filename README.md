# Interactive Journal

## Idee

Meine Idee ist eine interaktive Journal App zu bauen, welche auf das Pedometer zugreift um die Schritte als Feld einfügen zu können. Dann soll es möglich sein auf Bilder zuzugreifen, und oder auf die Kamera um Bilder zu Einträgen hinzufügen zu können.  
Jeden Monat oder Woche gibt es dann einen Recap.  
Um die App zu öffnen braucht es ein Passwort, mit welchem die Dateien verschlüsselt werden.

**Verwendete Sensoren oder Diensten/Apis:**

- Sensor auslesen und dessen Daten verarbeiten (5 Punkte)
    - (Pedometer)
- Mehr als eine Aktivität oder View verwenden (1 Punkt)
- Kommunikation zwischen zwei Aktivitäten oder Views (1 Punkt)
- Verwenden einer persistenten, lokalen Datenablage (2 Punkte)
- Interaktion mit Systemapplikationen (z. B. Kamera, SMS, …) (2 Punkte)

## Pitch

- Name der App
    - Interactive Journal
- Kurzbeschreibung der Idee in einem Satz oder als Stichwortliste.
    - Journal mit vorgefertigten Feldern wie Datum, Zeit, Schritte
    - Möglichkeit Bilder hinzuzufügen
    - Ein Recap jeden Monat oder Woche
- Erwähnung der Rahmenbedingungen
- Motivation hinter der Idee. Weshalb braucht es diese App?
    - Es braucht diese App um Erinnerungen festzuhalten, ohne Angst vor einer Cloud zu haben.
    - Sensible Inhalte und texte werden nur als verschlüsselte Dateien gespeichert.

## Storyboard

[Figma Prototyp](https://www.figma.com/proto/HbgmXRsShn8p1JyZBRk6GP/Interactive_Journal?node-id=2-11&t=c0HC22pevOuN1c75-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A1586&show-proto-sidebar=1)  
![Password_Int_Journal.png](:/bfc0d398a825499c84fcb95ecf3b311c)

*Zu nächst wird das Passwort des Benutzers abgefragt (Das wurde zuerst festgelegt)*

![Overview_Int_Journal.png](:/dd08337f8aa94ba58463453ef5c65fc0)

*Hier die Overview der Einträge diese ist nach Monaten Organisiert*

![Journal Entry_Int_Journal.png](:/9eda2683c35141c1babd18267aa6df45)

*Von dieser Overview kann zu den einzelenen Einträgen navigiert werden. In dieser kann Fliestext geschrieben aber auch Bilder hinzugefügt werden*

## Use Cases

### Funktionale Use Cases

![Interactive_Journal.drawio.png](:/0d6b6cd861974e899f15b233ae746983)  
*Der typische User meiner App ist Datenschutz wichtig.*

## Nicht funktionale Use Cases

### Use Case 1: Sicherheit und Datenschutz

#### Functionality

- **Features:**
    
    - Passwortschutz für die App.
    - Verschlüsselung der Tagebucheinträge.
    - Benutzerverwaltung für Passwortänderungen.
- **Vorbedingungen:**
    
    - Der Benutzer hat ein Passwort bei der ersten Einrichtung der App erstellt.
- **Hauptablauf:**
    
    1.  Benutzer öffnet die App.
    2.  App fordert das Passwort zur Authentifizierung an.
    3.  Benutzer gibt das Passwort ein.
    4.  App überprüft das Passwort und gewährt Zugriff auf die Einträge.
    5.  Bei der Erstellung und Speicherung eines Eintrags werden die Daten verschlüsselt.
    6.  Bei einer Passwortänderung muss der Benutzer das alte Passwort eingeben und ein neues festlegen.
- **Ergebnis:** Der Benutzer hat sicheren Zugriff auf die Tagebucheinträge, die verschlüsselt gespeichert sind.
    

#### Usability

- **Benutzeroberfläche:**
    
    - Einfache und klare Eingabemaske für das Passwort.
    - Hinweise und Feedback bei falscher Passwort-Eingabe.
- **Zugänglichkeit:**
    
    - Unterstützung von biometrischen Authentifizierungsverfahren (z.B. Fingerabdruck, Gesichtserkennung) für schnelleren Zugriff, wenn das Gerät dies unterstützt.
- **Dokumentation und Hilfestellungen:**
    
    - Anleitung zur Einrichtung und Verwaltung des Passworts.
    - FAQ und Support-Seite für Passwortprobleme.

#### Reliability

- **Verfügbarkeit:**
    
    - Die App muss sicherstellen, dass der Passwortschutz bei jedem Start der App aktiv ist.
- **Fehlerbehandlung:**
    
    - Sicheres Logging und Meldung bei wiederholten Fehlversuchen der Passwort-Eingabe.
    - Mechanismus zur Wiederherstellung des Passworts im Falle eines Verlusts (z.B. über Sicherheitsfragen oder E-Mail).
- **Integrität:**
    
    - Verschlüsselung der Daten mit modernen Algorithmen (z.B. AES-256).
    - Regelmässige Updates zur Sicherstellung der Sicherheit.

#### Performance (Leistung)

- **Reaktionszeit:**
    
    - Passwort-Eingabe und Authentifizierung müssen in unter 2 Sekunden erfolgen.
    - Verschlüsselung und Entschlüsselung der Einträge sollen den Benutzerfluss nicht merklich beeinträchtigen.
- **Effizienz:**
    
    - Die App sollte wenig Ressourcen benötigen, sodass die Verschlüsselung auch auf älteren Geräten performant bleibt.

#### Supportability

- **Wartbarkeit:**
    
    - Gut dokumentierter Code, insbesondere die Teile, die für die Verschlüsselung und Authentifizierung zuständig sind.
    - Modularer Aufbau der Sicherheitsfunktionen zur einfachen Aktualisierung und Erweiterung.
- **Testbarkeit:**
    
    - Manuelle Tests für alle sicherheitsrelevanten Funktionen.
- **Erweiterbarkeit:**
    
    - Möglichkeit, zukünftige Authentifizierungsmechanismen (z.B. neue biometrische Verfahren) einfach zu integrieren.
- **Kompatibilität:**
    
    - Unterstützung der aktuellen und letzten zwei Versionen der mobilen Betriebssysteme.

* * *

### Use Case 2: Benutzerfreundlichkeit bezüglich Design

#### Functionality

- **Features:**
    
    - Intuitive und ansprechende Benutzeroberfläche.
    - Anpassbare Layout-Optionen für individuelle Vorlieben.
    - Einfache Navigation durch die App.
- **Vorbedingungen:**
    
    - Der Benutzer hat die App installiert und geöffnet.
- **Hauptablauf:**
    
    1.  Benutzer startet die App.
    2.  Benutzer wird durch ein Onboarding-Prozess geführt, der die wichtigsten Funktionen erklärt.
    3.  Benutzer passt das Layout der App nach eigenen Vorlieben an.
    4.  Benutzer navigiert einfach durch verschiedene Abschnitte der App (z.B. Tagebucheinträge, Bilder hinzufügen, Recap anzeigen).
- **Ergebnis:** Der Benutzer findet die App einfach zu bedienen und visuell ansprechend.
    

#### Usability

- **Benutzeroberfläche:**
    
    - Modernes und klares Design mit Fokus auf Lesbarkeit und einfache Bedienung.
    - Kontrastreiche Farbpalette für bessere Sichtbarkeit.
- **Zugänglichkeit:**
    
    - Unterstützung von VoiceOver und anderen Bildschirmleseprogrammen.
    - Anpassbare Schriftgrössen und Farbschemata.
- **Dokumentation und Hilfestellungen:**
    
    - Interaktive Tutorials und Tooltips für neue Benutzer.
    - Ein umfassendes Hilfe-Menü und eine FAQ-Sektion.

#### Reliability

- **Verfügbarkeit:**
    
    - Die Benutzeroberfläche muss jederzeit reaktionsschnell und stabil sein.
- **Fehlerbehandlung:**
    
    - Benutzerfreundliche Fehlermeldungen und einfache Wiederherstellung von Fehlern.
    - Automatische Speicherung von Benutzereinstellungen und Anpassungen.
- **Integrität:**
    
    - Konsistentes Verhalten und Design über alle Plattformen und Geräte hinweg.

#### Performance (Leistung)

- **Reaktionszeit:**
    
    - Schnelle Ladezeiten für alle App-Bereiche (unter 2 Sekunden).
- **Effizienz:**
    
    - Ressourcenschonendes Design, das auch auf älteren Geräten flüssig läuft.

#### Supportability (Wartbarkeit)

- **Wartbarkeit:**
    
    - Modulare und gut dokumentierte Designkomponenten für einfache Updates und Anpassungen.
- **Testbarkeit:**
    
    - Manuelle Usability-Tests und A/B-Tests zur kontinuierlichen Verbesserung des Designs.
- **Erweiterbarkeit:**
    
    - Möglichkeit zur einfachen Einführung neuer Design-Themen und Layout-Optionen.
- **Kompatibilität:**
    
    - Unterstützung der aktuellen und letzten zwei Versionen der mobilen Betriebssysteme.

* * *

### Use Case 3: Daten-Backup und Wiederherstellung

#### Functionality (Funktionalität)

- **Features:**
    
    - Automatische und manuelle Backups der Tagebucheinträge.
    - Wiederherstellung der Daten aus einem Backup.
    - Synchronisation mit Cloud-Diensten (z.B. Google Drive, iCloud).
- **Vorbedingungen:**
    
    - Der Benutzer hat ein Cloud-Konto eingerichtet und der App die notwendigen Berechtigungen erteilt.
- **Hauptablauf:**
    
    1.  Benutzer öffnet die Backup-Einstellungen.
    2.  Benutzer aktiviert die automatische Backup-Funktion.
    3.  App führt regelmässige Backups der Tagebucheinträge durch.
    4.  Benutzer kann manuelle Backups erstellen.
    5.  Bei Datenverlust kann der Benutzer die Einträge aus einem Backup wiederherstellen.
- **Ergebnis:** Die Tagebucheinträge des Benutzers sind sicher gespeichert und können bei Bedarf wiederhergestellt werden.
    

#### Usability

- **Benutzeroberfläche:**
    
    - Einfach zu bedienende Backup- und Wiederherstellungsoptionen.
    - Klar verständliche Statusanzeigen für Backup- und Wiederherstellungsvorgänge.
- **Zugänglichkeit:**
    
    - Unterstützung von Sprachbefehlen und Bildschirmleseprogrammen.
- **Dokumentation und Hilfestellungen:**
    
    - Schritt-für-Schritt-Anleitungen für Backup und Wiederherstellung.
    - Hilfeseiten und Support-Kontaktmöglichkeiten.

#### Reliability

- **Verfügbarkeit:**
    
    - Die Backup-Funktion muss jederzeit verfügbar und zuverlässig sein.
- **Fehlerbehandlung:**
    
    - Automatische Benachrichtigungen bei fehlerhaften Backup-Vorgängen.
    - Sicheres Logging und Meldung von Fehlern an den Benutzer.
- **Integrität:**
    
    - Sicherstellung der Konsistenz und Vollständigkeit der Backups.

#### Performance

- **Reaktionszeit:**
    
    - Schnelle Durchführung von Backup- und Wiederherstellungsvorgängen.
- **Effizienz:**
    
    - Optimierter Datenabgleich, um den Speicher- und Netzwerkverbrauch zu minimieren.

#### Supportability

- **Wartbarkeit:**
    
    - Gut dokumentierter Code für Backup- und Wiederherstellungsfunktionen.
- **Testbarkeit:**
    
    - Regelmässige manuelle Tests der Backup- und Wiederherstellungsprozesse.
- **Erweiterbarkeit:**
    
    - Unterstützung zusätzlicher Cloud-Dienste und Speichermedien.
- **Kompatibilität:**
    
    - Unterstützung der aktuellen und letzten zwei Versionen der mobilen Betriebssysteme.

* * *

## Testkonzept

### Testumfeld

- **Hardware:**
    
    - Verschiedene mobile Geräte (Smartphones, Tablets) mit unterschiedlichen Spezifikationen (Prozessor, RAM, Speicher).
    - Geräte mit biometrischen Sensoren (Fingerabdruck, Gesichtserkennung).
- **Software:**
    
    - Betriebssysteme: Android (ab Version 9.0), iOS (ab Version 13).
    - Entwicklungsumgebung: Android Studio, Xcode.
    - Test-Frameworks: Espresso (Android), XCTest (iOS).
- **Netzwerk:**
    
    - Stabile Internetverbindung für Cloud-Synchronisation und Backup-Tests.
    - Test-Umgebung mit verschiedenen Netzwerkbedingungen (WiFi, Mobile Daten, offline).
- **Daten:**
    
    - Dummy-Daten für Tagebucheinträge.
    - Test-Accounts für Cloud-Dienste (Google Drive, iCloud).

### Testmethode

- **Manuelle Tests:**
    - Tests werden von Testern durchgeführt, die die App auf verschiedenen Geräten und unter verschiedenen Bedingungen manuell bedienen.
    - Jeder Testfall wird dokumentiert und das Ergebnis wird protokolliert.
    - Fehler und Probleme werden gemeldet und in einem Fehlerverfolgungssystem erfasst.

### Testfälle

#### Use Case 1: Sicherheit und Datenschutz

**Testfall 1: Passwortschutz und Authentifizierung**

- **Identifikation:** TC-SD-001
- **Vorbedingungen:** Die App ist installiert, und ein Passwort wurde bei der ersten Einrichtung erstellt.
- **Schritt für Schritt Vorgehen:**
    1.  Öffnen Sie die App.
    2.  Geben Sie das korrekte Passwort ein.
    3.  Überprüfen Sie, ob der Zugriff auf die Tagebucheinträge gewährt wird.
    4.  Schliessen Sie die App und öffnen Sie sie erneut.
    5.  Geben Sie ein falsches Passwort ein.
    6.  Überprüfen Sie, ob der Zugriff verweigert wird und eine Fehlermeldung angezeigt wird.
- **Erwartetes Resultat:** Der Benutzer kann die App nur mit dem korrekten Passwort öffnen. Bei falscher Eingabe wird der Zugriff verweigert.

#### Use Case 2: Benutzerfreundlichkeit bezüglich Design

**Testfall 2: Benutzeroberfläche und Navigation**

- **Identifikation:** TC-UD-001
- **Vorbedingungen:** Die App ist installiert und geöffnet.
- **Schritt für Schritt Vorgehen:**
    1.  Starten Sie die App.
    2.  Durchlaufen Sie den Onboarding-Prozess.
    3.  Passen Sie das Layout der App an (z.B. Farbschema, Schriftgrösse).
    4.  Navigieren Sie zu verschiedenen Abschnitten der App (Tagebucheinträge, Bilder hinzufügen, Recap anzeigen).
- **Erwartetes Resultat:** Der Benutzer findet die App einfach zu bedienen und kann problemlos durch die verschiedenen Abschnitte navigieren. Anpassungen des Layouts werden korrekt angezeigt.

#### Use Case 3: Daten-Backup und Wiederherstellung

**Testfall 3: Automatische und manuelle Backups**

- **Identifikation:** TC-DB-001
- **Vorbedingungen:** Die App ist installiert und der Benutzer hat ein Cloud-Konto eingerichtet.
- **Schritt für Schritt Vorgehen:**
    1.  Öffnen Sie die Backup-Einstellungen.
    2.  Aktivieren Sie die automatische Backup-Funktion.
    3.  Erstellen Sie einen neuen Tagebucheintrag.
    4.  Überprüfen Sie, ob das Backup automatisch durchgeführt wird.
    5.  Erstellen Sie ein manuelles Backup.
    6.  Löschen Sie den Tagebucheintrag.
    7.  Stellen Sie den Tagebucheintrag aus dem Backup wieder her.
- **Erwartetes Resultat:** Die Tagebucheinträge werden automatisch und manuell gesichert. Gelöschte Einträge können erfolgreich aus dem Backup wiederhergestellt werden.

### Funktionale Use Cases

#### Eintrag hinzufügen

**Testfall 4: Eintrag hinzufügen**

- **Identifikation:** TC-FN-001
- **Vorbedingungen:** Die App ist geöffnet.
- **Schritt für Schritt Vorgehen:**
    1.  Öffnen Sie die App und navigieren Sie zum Abschnitt „Neuer Eintrag“.
    2.  Geben Sie den Text für den neuen Eintrag ein.
    3.  Speichern Sie den Eintrag.
- **Erwartetes Resultat:** Der neue Eintrag wird erfolgreich gespeichert und in der Liste der Tagebucheinträge angezeigt.

#### Eintrag bearbeiten

**Testfall 5: Eintrag bearbeiten**

- **Identifikation:** TC-FN-002
- **Vorbedingungen:** Ein Eintrag existiert.
- **Schritt für Schritt Vorgehen:**
    1.  Öffnen Sie die App und navigieren Sie zu einem bestehenden Eintrag.
    2.  Bearbeiten Sie den Text des Eintrags.
    3.  Speichern Sie die Änderungen.
- **Erwartetes Resultat:** Die Änderungen am Eintrag werden erfolgreich gespeichert und angezeigt.

#### Eintrag löschen

**Testfall 6: Eintrag löschen**

- **Identifikation:** TC-FN-003
- **Vorbedingungen:** Ein Eintrag existiert.
- **Schritt für Schritt Vorgehen:**
    1.  Öffnen Sie die App und navigieren Sie zu einem bestehenden Eintrag.
    2.  Löschen Sie den Eintrag.
    3.  Bestätigen Sie die Löschung.
- **Erwartetes Resultat:** Der Eintrag wird erfolgreich gelöscht und nicht mehr in der Liste der Tagebucheinträge angezeigt.

#### Bild hinzufügen

**Testfall 7: Bild hinzufügen**

- **Identifikation:** TC-FN-004
- **Vorbedingungen:** Die App ist geöffnet und der Benutzer hat Zugriff auf die Kamera und Galerie gewährt.
- **Schritt für Schritt Vorgehen:**
    1.  Öffnen Sie die App und navigieren Sie zu einem neuen oder bestehenden Eintrag.
    2.  Wählen Sie die Option, ein Bild hinzuzufügen.
    3.  Wählen Sie ein Bild aus der Galerie oder nehmen Sie ein neues Bild mit der Kamera auf.
    4.  Fügen Sie das Bild dem Eintrag hinzu und speichern Sie.
- **Erwartetes Resultat:** Das Bild wird erfolgreich dem Eintrag hinzugefügt und korrekt angezeigt.

Dieses Testkonzept deckt die wesentlichen funktionalen und nicht-funktionalen Anforderungen der Applikation ab und stellt sicher, dass die App gründlich und systematisch überprüft wird.

## Component Diagramm

![Interactive_Journal_Component_Diagramm.png](:/dbe7377812dc4c58ad8495b95ded7561)  
*Die Kamera Component und die Navbar Component fiellen weg, da ich auf einen anderen router umsteigen musste wegen eines react native updates, da ist die navbar schon dabei. Date ist auch in JS schon enthalten also ist das von grundauf überflüssig*

## Schichten Trennung

Als Schichten Trennung habe ich einerseits:

- Screens
- Components
- Utils
## Version Controll 
![322206a226d5d9426a88e9b084ed6d46.png](:/be1c696339b74a05acd281cfae3e59b4)
Ich arbeite mit Git und Github mitten im Projekt musste ich die CodeBase wechseln, wegen updates. 
Deshalb sind in dem Repo was ich hier abgebe auch fast keine Commits.
[Github-Repo](https://github.com/Jelenal1/interactive-journal-updated)

## Testprotokoll

### Testfallübersicht

| Testfall ID | Use Case | Beschreibung | Vorbedingungen | Schritte | Erwartetes Ergebnis | Tester | Testdatum | Ergebnis | Bemerkungen |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TC-SD-001 | Sicherheit und Datenschutz | Passwortschutz und Authentifizierung | Die App ist installiert, und ein Passwort wurde bei der ersten Einrichtung erstellt. | 1\. Öffnen Sie die App.  <br>2\. Geben Sie das korrekte Passwort ein.  <br>3\. Überprüfen Sie, ob der Zugriff auf die Tagebucheinträge gewährt wird.  <br>4\. Schliessen Sie die App und öffnen Sie sie erneut.  <br>5\. Geben Sie ein falsches Passwort ein.  <br>6\. Überprüfen Sie, ob der Zugriff verweigert wird und eine Fehlermeldung angezeigt wird. | Der Benutzer kann die App nur mit dem korrekten Passwort öffnen. Bei falscher Eingabe wird der Zugriff verweigert. |     |     |     |     |
| TC-UD-001 | Benutzerfreundlichkeit bezüglich Design | Benutzeroberfläche und Navigation | Die App ist installiert und geöffnet. | 1\. Starten Sie die App.  <br>2\. Durchlaufen Sie den Onboarding-Prozess.  <br>3\. Passen Sie das Layout der App an (z.B. Farbschema, Schriftgrösse).  <br>4\. Navigieren Sie zu verschiedenen Abschnitten der App (Tagebucheinträge, Bilder hinzufügen, Recap anzeigen). | Der Benutzer findet die App einfach zu bedienen und kann problemlos durch die verschiedenen Abschnitte navigieren. Anpassungen des Layouts werden korrekt angezeigt. |     |     |     |     |
| TC-DB-001 | Daten-Backup und Wiederherstellung | Automatische und manuelle Backups | Die App ist installiert und der Benutzer hat ein Cloud-Konto eingerichtet. | 1\. Öffnen Sie die Backup-Einstellungen.  <br>2\. Aktivieren Sie die automatische Backup-Funktion.  <br>3\. Erstellen Sie einen neuen Tagebucheintrag.  <br>4\. Überprüfen Sie, ob das Backup automatisch durchgeführt wird.  <br>5\. Erstellen Sie ein manuelles Backup.  <br>6\. Löschen Sie den Tagebucheintrag.  <br>7\. Stellen Sie den Tagebucheintrag aus dem Backup wieder her. | Die Tagebucheinträge werden automatisch und manuell gesichert. Gelöschte Einträge können erfolgreich aus dem Backup wiederhergestellt werden. |     |     |     |     |
| TC-FN-001 | Eintrag hinzufügen | Eintrag hinzufügen | Die App ist geöffnet. | 1\. Öffnen Sie die App und navigieren Sie zum Abschnitt „Neuer Eintrag“.  <br>2\. Geben Sie den Text für den neuen Eintrag ein.  <br>3\. Speichern Sie den Eintrag. | Der neue Eintrag wird erfolgreich gespeichert und in der Liste der Tagebucheinträge angezeigt. |     |     |     |     |
| TC-FN-002 | Eintrag bearbeiten | Eintrag bearbeiten | Ein Eintrag existiert. | 1\. Öffnen Sie die App und navigieren Sie zu einem bestehenden Eintrag.  <br>2\. Bearbeiten Sie den Text des Eintrags.  <br>3\. Speichern Sie die Änderungen. | Die Änderungen am Eintrag werden erfolgreich gespeichert und angezeigt. |     |     |     |     |
| TC-FN-003 | Eintrag löschen | Eintrag löschen | Ein Eintrag existiert. | 1\. Öffnen Sie die App und navigieren Sie zu einem bestehenden Eintrag.  <br>2\. Löschen Sie den Eintrag.  <br>3\. Bestätigen Sie die Löschung. | Der Eintrag wird erfolgreich gelöscht und nicht mehr in der Liste der Tagebucheinträge angezeigt. |     |     |     |     |
| TC-FN-004 | Bild hinzufügen | Bild hinzufügen | Die App ist geöffnet und der Benutzer hat Zugriff auf die Kamera und Galerie gewährt. | 1\. Öffnen Sie die App und navigieren Sie zu einem neuen oder bestehenden Eintrag.  <br>2\. Wählen Sie die Option, ein Bild hinzuzufügen.  <br>3\. Wählen Sie ein Bild aus der Galerie oder nehmen Sie ein neues Bild mit der Kamera auf.  <br>4\. Fügen Sie das Bild dem Eintrag hinzu und speichern Sie. | Das Bild wird erfolgreich dem Eintrag hinzugefügt und korrekt angezeigt. |     |     |     |     |

### Testdurchführung

| Tester | Testdatum | Testfall ID | Ergebnis | Bemerkungen |
| --- | --- | --- | --- | --- |
| Azhaar | 5.07.24 | TC-SD-001 | Nicht implementiert |     |
| Azhaar | 5.07.24 | TC-UD-001 | Die Navigation ist einfach und intuitiv. |     |
| Azhaar | 5.07.24 | TC-DB-001 | Nicht implementiert |     |
| Azhaar | 5.07.24 | TC-FN-001 | Funktioniert neuer Eintrag wird angezeigt. |     |
| Azhaar | 5.07.24 | TC-FN-002 | Funktioniert jeder Eintrag kann bearbeitet werden. |     |
| Azhaar | 5.07.24 | TC-FN-003 | Funktioniert jeder Eintrag ist löschbar. |     |
| Azhaar | 5.07.24 | TC-FN-004 | Funktioniert nicht das Bild wird nicht angezeigt. |     |
## Reflexion
Meine Intention war eine sichere Tagebuchapp zu entwickeln mit der Einträge verschlüsselt gespeichert werden können. Zu Anfang hat das auch funktioniert die Grundfunktionalitäten von jeder Notizapp stehen, jedoch ist am Donnerstag den 4 Juli ein React Native Update mit breaking changes geshipt. 
Nach diesem Abend hat nichts mehr funktioniert. Vorallem das Building nicht mehr.
Das war ein herber rückschlag, vorallem die Kamera Api konnte nicht mehr so benutzt werden wie auch schon. Bilder konnten zwar aufgenommen werden, aber sie wurden nicht mehr angezeigt.
Es ist jetzt nicht vielmehr als eine Notiz App mit Pedometer access.
Daraus lerne ich, dass ich vor einem Projekt den Zustand der Technologie ab checken sollte.
Ich denke weiterhin, dass react native eine gute wahl ist. Aber wenn ich unter zeitdruck stehe vielleicht nicht die beste Wahl.
