from csv import DictReader
import os


with open('cow.csv', encoding="utf8") as f:
    reader = DictReader(f)
    for d in reader:
        with open(os.path.join('countries', f"{d['short_name']}.html"), "w") as fw:

            fw.write(f'''
                <html>
                    <head>
                    <title>{d['name']}</title>
                     </head>
                        <body>
                        <h1>{d['name']}</h1>
                        <dt>Capital</dt>
                        <dd>{d['capital']}</dd>
                        <dt>population</dt>
                        <dd>{d['population']}</dd>
                    
                        <dt>Land Area</dt>
                        <dd>{d['land']}<sup>2</sup></dd>
                    
                        <dt>Continent</dt>
                        <dd>{d['continent']}</dd>
                    
                        </dl>
                    </body>
                </html>
            '''
                     )