"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProjectPatch {
    static getAttributeTypeMap() {
        return ProjectPatch.attributeTypeMap;
    }
}
exports.ProjectPatch = ProjectPatch;
ProjectPatch.discriminator = undefined;
ProjectPatch.attributeTypeMap = [
    {
        "name": "status",
        "baseName": "status",
        "type": "ProjectStatus"
    }
];
//# sourceMappingURL=projectPatch.js.map