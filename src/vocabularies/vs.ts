import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "rdf-js";
type Vs = NamespaceBuilder & {
    /*more information about the status etc of a term, typically human oriented*/
    "moreinfo": NamedNode;
    /*the status of a vocabulary term, expressed as a short symbolic string; known values include 'unstable','testing', 'stable' and 'archaic'*/
    "term_status": NamedNode;
    /*human-oriented documentation, examples etc for use of this term*/
    "userdocs": NamedNode;
};
export const vs: Vs = (namespace("http://www.w3.org/2003/06/sw-vocab-status/ns#") as any);
