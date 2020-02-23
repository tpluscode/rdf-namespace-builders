import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
interface Rdfa {
    "DocumentError": NamedNode;
    "Error": NamedNode;
    "Info": NamedNode;
    "PGClass": NamedNode;
    "Pattern": NamedNode;
    "PrefixMapping": NamedNode;
    "PrefixOrTermMapping": NamedNode;
    "PrefixRedefinition": NamedNode;
    "TermMapping": NamedNode;
    "UnresolvedCURIE": NamedNode;
    "UnresolvedTerm": NamedNode;
    "VocabReferenceError": NamedNode;
    "Warning": NamedNode;
    "context": NamedNode;
    "copy": NamedNode;
    "prefix": NamedNode;
    "term": NamedNode;
    "uri": NamedNode;
    "usesVocabulary": NamedNode;
    "vocabulary": NamedNode;
}
export const rdfa: Rdfa = (namespace(prefixes.rdfa) as any);
