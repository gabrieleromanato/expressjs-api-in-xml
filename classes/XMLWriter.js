'use strict';

class XMLWriter {
    constructor({ root, data, itemName}) {
        this.root = root;
        this.data = data;
        this.itemName = itemName;
    }

    hasSpecialChars(str) {
        return /<|>|&/.test(str);
    }

    write() {
        let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
        xml += `<${this.root}>` + '\n';

        this.data.forEach(item => {
            xml += `<${this.itemName}>` + '\n';

            const keys = Object.keys(item);

            for(let key of keys) {
                let content = item[key];
                xml += `<${key}>`;
                if(this.hasSpecialChars(content)) {
                    xml += `<![CDATA[${content}]]>`; 
                } else {
                    xml += `${content}`; 
                }
                xml += `</${key}>` + '\n';
            }

            xml += `</${this.itemName}>` + '\n';
        });

        xml += `</${this.root}>`;

        return xml;
    }
}

module.exports = XMLWriter;