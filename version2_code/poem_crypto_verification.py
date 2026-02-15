"""
Cryptography with Linear Transformations - Verification Script
A Romantic Professor's Encryption of a Love Poem
"""

import numpy as np

# The Key Matrix K (Unimodular: det(K) = 1)
# This ensures K^(-1) has integer entries
K = np.array([
    [1, 1, 1],
    [0, 1, 1],
    [0, 0, 1]
], dtype=int)

# Verify det(K) = 1
det_K = int(np.round(np.linalg.det(K)))
print("=" * 80)
print("CRYPTOGRAPHY WITH LINEAR TRANSFORMATIONS")
print("A Student Project in Romantic Encryption")
print("=" * 80)
print()
print("Key Matrix K:")
print(K)
print(f"det(K) = {det_K} ✓ (Unimodular - inverse has integer entries)")
print()

# Calculate K^(-1)
K_inv = np.linalg.inv(K)
K_inv_int = np.round(K_inv).astype(int)
print("Inverse Matrix K^(-1):")
print(K_inv_int)
print()

# Verify K * K^(-1) = I
identity_check = K @ K_inv_int
print("Verification: K * K^(-1) = I")
print(np.round(identity_check).astype(int))
print()
print("=" * 80)
print()

# Character mapping: A=1, B=2, ..., Z=26, Space=27
def char_to_num(c):
    """Convert character to number using A=1, ..., Z=26, Space=27"""
    c = c.upper()
    if c.isalpha():
        return ord(c) - ord('A') + 1  # A=1, B=2, ..., Z=26
    elif c == ' ':
        return 27
    elif c in ",.!?;:'\"-":
        # Punctuation: map to space for simplicity in this academic context
        return 27
    else:
        return 27  # Default to space

def num_to_char(n):
    """Convert number back to character"""
    n = int(round(n))
    if 1 <= n <= 26:
        return chr(n - 1 + ord('A'))
    elif n == 27:
        return ' '
    else:
        return '?'

def text_to_vectors(text):
    """Convert text to list of 3D vectors"""
    # Clean text: remove special punctuation but keep meaning with spaces
    cleaned = ""
    for c in text:
        if c.isalpha() or c == ' ':
            cleaned += c
        else:
            cleaned += ' '  # Replace punctuation with space
    
    # Convert to numbers
    numbers = [char_to_num(c) for c in cleaned]
    
    # Pad to make length divisible by 3
    while len(numbers) % 3 != 0:
        numbers.append(27)  # pad with spaces
    
    # Group into vectors of length 3
    vectors = []
    for i in range(0, len(numbers), 3):
        vectors.append(np.array([numbers[i], numbers[i+1], numbers[i+2]], dtype=int))
    
    return vectors

def vectors_to_text(vectors):
    """Convert list of vectors back to text"""
    text = ""
    for vec in vectors:
        for num in vec:
            text += num_to_char(num)
    return text.rstrip()  # Remove trailing spaces

def encrypt(plaintext_vectors):
    """Encrypt using C = K * M"""
    ciphertext_vectors = []
    for M in plaintext_vectors:
        C = K @ M
        ciphertext_vectors.append(C)
    return ciphertext_vectors

def decrypt(ciphertext_vectors):
    """Decrypt using M = K^(-1) * C"""
    plaintext_vectors = []
    for C in ciphertext_vectors:
        M = K_inv_int @ C
        plaintext_vectors.append(M)
    return plaintext_vectors

# The Poem (Plaintext)
stanza1 = "The rows are stacked against me now, A sequence I can't quite undo;"
stanza2 = "Since your mouth redefined the sum, The only constant left is you."
stanza3 = "I've mapped the steps, I've traced the line, But logic's hit a sudden snare—"
stanza4 = "The thought of us is the missing breath, When you slip and find the stairs."

poem = f"{stanza1} {stanza2} {stanza3} {stanza4}"

print("THE POEM (PLAINTEXT)")
print("=" * 80)
print()
print("Stanza 1:", stanza1)
print("Stanza 2:", stanza2)
print("Stanza 3:", stanza3)
print("Stanza 4:", stanza4)
print()
print("=" * 80)
print()

# Encrypt each stanza separately for the project structure
stanzas = [stanza1, stanza2, stanza3, stanza4]
encrypted_stanzas = []

for i, stanza in enumerate(stanzas, 1):
    print(f"STANZA {i} - ENCRYPTION")
    print("-" * 80)
    
    # Convert to vectors
    plaintext_vecs = text_to_vectors(stanza)
    print(f"Plaintext: \"{stanza}\"")
    print(f"Number of 3D vectors: {len(plaintext_vecs)}")
    print()
    
    # Show first vector as example
    print(f"First plaintext vector M₁ = {plaintext_vecs[0]}")
    print(f"  Corresponds to: \"{vectors_to_text([plaintext_vecs[0]])}\"")
    print()
    
    # Encrypt
    ciphertext_vecs = encrypt(plaintext_vecs)
    encrypted_stanzas.append(ciphertext_vecs)
    
    # Show first encryption
    print(f"First ciphertext vector C₁ = K * M₁ = {ciphertext_vecs[0]}")
    print()
    
    # Show all ciphertext vectors for this stanza
    print(f"All ciphertext vectors for Stanza {i}:")
    for j, vec in enumerate(ciphertext_vecs):
        print(f"  C_{j+1} = {vec}")
    print()
    
    # Decrypt to verify
    decrypted_vecs = decrypt(ciphertext_vecs)
    decrypted_text = vectors_to_text(decrypted_vecs)
    
    print(f"Decryption verification:")
    print(f"  Decrypted text: \"{decrypted_text}\"")
    
    # Check if matches (after cleaning)
    original_cleaned = vectors_to_text(plaintext_vecs)
    if decrypted_text.strip() == original_cleaned.strip():
        print(f"  ✓ Perfect match!")
    else:
        print(f"  ⚠ Mismatch! Original: \"{original_cleaned}\"")
    print()
    print("=" * 80)
    print()

# Create the ciphertext file for the project
print("GENERATING CIPHERTEXT FOR PROJECT REPORT...")
print()

with open('/workspaces/crypotography/project_ciphertext.txt', 'w') as f:
    f.write("=" * 80 + "\n")
    f.write("CRYPTOGRAPHY WITH LINEAR TRANSFORMATIONS\n")
    f.write("Student Project Report - Encrypted Poem\n")
    f.write("=" * 80 + "\n\n")
    
    f.write("Key Matrix K:\n")
    f.write("  ⎡ 1  1  1 ⎤\n")
    f.write("  ⎢ 0  1  1 ⎥\n")
    f.write("  ⎣ 0  0  1 ⎦\n\n")
    
    f.write("Character Encoding: A=1, B=2, ..., Z=26, Space=27\n\n")
    f.write("=" * 80 + "\n\n")
    
    for i, ciphertext_vecs in enumerate(encrypted_stanzas, 1):
        f.write(f"STANZA {i} - CIPHERTEXT VECTORS\n")
        f.write("-" * 80 + "\n")
        for j, vec in enumerate(ciphertext_vecs):
            f.write(f"C_{j+1} = [{vec[0]:3d}, {vec[1]:3d}, {vec[2]:3d}]\n")
        f.write("\n")
    
    f.write("=" * 80 + "\n")
    f.write("\nTo decrypt: Compute M = K^(-1) * C for each vector.\n")
    f.write("Then convert numbers back to letters using the encoding scheme.\n")

print("✓ Ciphertext saved to: project_ciphertext.txt")
print()

# Generate LaTeX-friendly output
print("=" * 80)
print("LATEX-READY CIPHERTEXT (for copy-paste into report)")
print("=" * 80)
print()

for i, ciphertext_vecs in enumerate(encrypted_stanzas, 1):
    print(f"% Stanza {i}")
    for j, vec in enumerate(ciphertext_vecs):
        print(f"\\mathbf{{C}}_{{{j+1}}} = \\begin{{pmatrix}} {vec[0]} \\\\ {vec[1]} \\\\ {vec[2]} \\end{{pmatrix}}")
    print()

print("=" * 80)
print("\nVERIFICATION COMPLETE! All stanzas encrypt and decrypt correctly.")
print("=" * 80)
